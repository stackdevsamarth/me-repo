// app/api/events/route.ts
import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/db/connection";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const eventName = formData.get("eventName")?.toString()!;
    const description = formData.get("description")?.toString()!;
    const location = formData.get("location")?.toString()!;
    const eventBy = formData.get("eventBy")?.toString()!;
    const eventDate = formData.get("eventDate")?.toString()!;
    const eventTime = formData.get("eventTime")?.toString()!;
    const seats = Number(formData.get("seats"));
    // const bannerFile = formData.get("bannerImage") as File;

    const speakersJson = formData.get("speakers")?.toString()!;
    const timelineJson = formData.get("timeline")?.toString()!;

    const speakers = JSON.parse(speakersJson); // [{name, designation}, ...]
    const timeline = JSON.parse(timelineJson); // [{time, activity}, ...]

    // const buffer = Buffer.from(await bannerFile.arrayBuffer());
    // const fileName = Date.now() + "-" + bannerFile.name;

    // For this example, we’re saving the file locally.
    // const fs = require("fs");
    // fs.writeFileSync(`public/uploads/${fileName}`, buffer);

    const [eventResult]: any = await connection.query(
      `INSERT INTO events (event_name, description, location, event_by, event_date, event_time, seats) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [eventName, description, location, eventBy, eventDate, eventTime, seats]
    );

    const eventId = eventResult.insertId;

    // Insert speakers
    for (const speaker of speakers) {
      await connection.query(
        `INSERT INTO speakers (event_id, name, designation) VALUES (?, ?, ?)`,
        [eventId, speaker.name, speaker.designation]
      );
    }

    // Insert timeline
    for (const slot of timeline) {
      await connection.query(
        `INSERT INTO event_timeline (event_id, time, activity) VALUES (?, ?, ?)`,
        [eventId, slot.time, slot.activity]
      );
    }

    return NextResponse.json(
      { message: "Event created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
