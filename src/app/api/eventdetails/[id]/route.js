// app/api/events/[id]/route.js
import { NextResponse } from "next/server";
import connection from "@/app/db/connection";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const [rows] = await connection.query("SELECT * FROM events WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
