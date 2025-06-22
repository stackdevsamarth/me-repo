import { NextResponse } from 'next/server';
import connection from "@/app/db/connection";

export async function POST(request, { params }) {
  try {
    const { status } = await request.json();
    const id = params.id;

    const sql = "UPDATE blogs SET status = ? WHERE id = ?";
    
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [status, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });

    return NextResponse.json({ 
      message: `Blog status updated to ${status}` 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}


// import mysql from "mysql2";
// import nextConnect from "next-connect";
// import connection from "@/app/db/connection";
// // MySQL connection

// // Create a Next.js API route with next-connect
// const handler = nextConnect();

// handler.post((req, res) => {
//   const { id } = req.query;
//   const { status } = req.body; // status should be 'published' or 'rejected'

//   const sql = "UPDATE blogs SET status = ? WHERE id = ?";
//   connection.query(sql, [status, id], (err) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(200).json({ message: `Blog status updated to ${status}` });
//   });
// });

// export default handler;
