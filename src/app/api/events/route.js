// src/app/api/events/route.js

import connection from "@/app/db/connection"; // adjust this path as needed

export async function GET(request) {
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM events ORDER BY id DESC"
    ); // Replace 'id' with the correct column name

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch events" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
