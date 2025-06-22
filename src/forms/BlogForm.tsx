"use client";
import BtnArrow from "@/svg/BtnArrow";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";

interface FormData {
  domain: string;
  email: string;
  message: string;
  authorname: string;
  blogTitle: string;
  blogDescription: string;
  sendViaEmail?: boolean;
  mainImage?: FileList;
  descriptionImages?: FileList;
}

const schema = yup
  .object({
    domain: yup.string().required("Domain is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
    authorname: yup.string().required("Author name is required"),
    blogTitle: yup.string().required("Blog title is required"),
    blogDescription: yup.string().required("Blog description is required"),
    sendViaEmail: yup.boolean(),
    mainImage: yup
      .mixed<FileList>()
      .test(
        "fileSize",
        "Main image must be less than 2MB",
        (files) =>
          !files || (files.length > 0 && files[0].size <= 2 * 1024 * 1024)
      ),
    descriptionImages: yup.mixed<FileList>(),
  })
  .required();

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [descriptionImagePreviews, setDescriptionImagePreviews] = useState<
    string[]
  >([]);
  const [blogDescription, setBlogDescription] = useState("");

  useEffect(() => {
    setValue("blogDescription", blogDescription);
  }, [blogDescription, setValue]);

  const handleMainImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDescriptionImagesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setDescriptionImagePreviews(filesArray);
    }
  };

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("blogTitle", data.blogTitle);
    formData.append("blogDescription", data.blogDescription);
    formData.append("message", data.message);
    formData.append("domain", data.domain);
    formData.append("email", data.email);
    formData.append("authorname", data.authorname);

    if (data.mainImage && data.mainImage.length > 0) {
      formData.append("mainImage", data.mainImage[0]);
    }

    if (data.descriptionImages && data.descriptionImages.length > 0) {
      Array.from(data.descriptionImages).forEach((file) => {
        formData.append("descriptionImages", file);
      });
    }

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      toast(result.message, { position: "top-center" });
      reset();
      setMainImagePreview(null);
      setDescriptionImagePreviews([]);
      setBlogDescription("");
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Failed to submit blog", { position: "top-center" });
    }
  };
  return (
    <div className="comment-respond">
      <h4 className="comment-reply-title">Write a blog</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
        <p className="comment-notes">
          <span>Publish your first blog with us</span>
        </p>

        {/* Blog Title Field */}
        <div className="comment-field">
          <input
            type="text"
            {...register("blogTitle")}
            placeholder="Blog Title"
          />
          <p className="form_error">{errors.blogTitle?.message}</p>
        </div>

        {/* Blog Main Image Upload */}
        <div className="comment-field">
          <input
            type="file"
            {...register("mainImage")}
            onChange={handleMainImageChange}
          />
          {mainImagePreview && (
            <img
              src={mainImagePreview}
              alt="Main Preview"
              className="image-preview"
            />
          )}
          <p className="form_error">{errors.mainImage?.message}</p>
        </div>

        {/* Blog Description Field with Rich Text Editor */}
        <div className="comment-field">
          <ReactQuill
            value={blogDescription}
            onChange={(content) => {
              setBlogDescription(content);
            }}
            placeholder="Write your blog content here..."
          />
          <p className="form_error">{errors.blogDescription?.message}</p>
        </div>

        {/* Blog Description Images Upload */}
        <div className="comment-field">
          <input
            type="file"
            {...register("descriptionImages")}
            multiple
            onChange={handleDescriptionImagesChange}
          />
          <div className="image-preview-container">
            {descriptionImagePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Description Preview ${index + 1}`}
                className="image-preview"
              />
            ))}
          </div>
          <p className="form_error">{errors.descriptionImages?.message}</p>
        </div>

        {/* Comment Field */}
        <div className="comment-field">
          <textarea
            placeholder="Conclusion"
            {...register("message")}
          ></textarea>
          <p className="form_error">{errors.message?.message}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="comment-field">
              <input type="text" {...register("domain")} placeholder="Tags" />
              <p className="form_error">{errors.domain?.message}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="comment-field">
              <input type="email" {...register("email")} placeholder="Email" />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="comment-field">
              <input
                type="text"
                {...register("authorname")}
                placeholder="Author Name"
              />
              <p className="form_error">{errors.authorname?.message}</p>
            </div>
          </div>
        </div>

        <button className="btn btn-two arrow-btn">
          Post <BtnArrow />
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
