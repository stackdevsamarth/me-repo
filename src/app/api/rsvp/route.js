import connection from "@/app/db/connection";
import { NextResponse } from "next/server"; // Import NextResponse
// Handle POST request
export async function POST(req) {
  const {
    user_name,
    user_email,
    phone,
    organization,
    userType,
    howDidYouHear,
    message,
  } = await req.json(); // Parse the incoming JSON data

  const orderNumber =
    "Metaed" + Math.random().toString(36).substr(2, 8).toUpperCase();
  const registrationDate = new Date();

  try {
    // Insert data into the database
    const [result] = await connection.execute(
      `INSERT INTO rsvp_submissions (user_name, user_email, phone, organization, userType, howDidYouHear, message, order_number, registration_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_name,
        user_email,
        phone,
        organization,
        userType,
        howDidYouHear,
        message,
        orderNumber,
        registrationDate,
      ]
    );

    return NextResponse.json({ success: true, orderNumber, registrationDate });
  } catch (error) {
    console.error("Error inserting data into MySQL", error);
    return NextResponse.json(
      { success: false, error: "Database error" },
      { status: 500 }
    );
  }
}
