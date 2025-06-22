import connection from "@/app/db/connection";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { fname, lname, email, password } = await request.json();

    if (!fname || !lname || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const [existingUser] = await connection.execute(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );

    if ((existingUser as any[]).length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await connection.execute(
      "INSERT INTO Users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fname, lname, email, hashedPassword, "student"]
    );

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
