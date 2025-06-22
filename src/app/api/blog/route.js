import mysql from "mysql2";
import multer from "multer";
import { NextResponse } from "next/server";
import connection from "@/app/db/connection";

// Multer setup remains the same
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    const blogTitle = formData.get("blogTitle");
    const blogDescription = formData.get("blogDescription");
    const message = formData.get("message");
    const domain = formData.get("domain");
    const email = formData.get("email");
    const authorname = formData.get("authorname");

    const mainImage = formData.get("mainImage");
    const descriptionImages = formData.getAll("descriptionImages");

    const sql =
      "INSERT INTO blogs (blogTitle, blogDescription, message, domain, email, authorname, mainImage, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    return new Promise((resolve, reject) => {
      connection.query(
        sql,
        [
          blogTitle,
          blogDescription,
          message,
          domain,
          email,
          authorname,
          mainImage ? mainImage.name : null,
          "pending",
        ],
        (err, result) => {
          if (err) {
            reject(NextResponse.json({ error: err.message }, { status: 500 }));
          }

          const blogId = result.insertId;
          if (descriptionImages.length > 0) {
            const imageSql =
              "INSERT INTO blog_images (blogId, imagePath) VALUES ?";
            const imageValues = descriptionImages.map((image) => [
              blogId,
              image.name,
            ]);

            connection.query(imageSql, [imageValues], (err) => {
              if (err) {
                reject(
                  NextResponse.json({ error: err.message }, { status: 500 })
                );
              }
              resolve(
                NextResponse.json(
                  {
                    message:
                      "Blog submitted successfully and is pending approval",
                  },
                  { status: 201 }
                )
              );
            });
          } else {
            resolve(
              NextResponse.json(
                {
                  message:
                    "Blog submitted successfully and is pending approval",
                },
                { status: 201 }
              )
            );
          }
        }
      );
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
