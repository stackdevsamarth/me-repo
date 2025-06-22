import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    const [result] = await connection.execute(
      'INSERT INTO attendees (first_name, last_name, email, how_did_you_hear, developer_experience, organization, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        data.firstName,
        data.lastName,
        data.email,
        data.howDidYouHear,
        data.developerExperience,
        data.organization,
        data.message
      ]
    );

    await connection.end();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}