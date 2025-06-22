"use client";
import BtnArrow from "@/svg/BtnArrow";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import InjectableSvg from "@/hooks/InjectableSvg";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  user_name: string;
  user_email: string;
  phone: string;
  organization: string;
  userType: string;
  howDidYouHear: string;
  message: string;
}

const schema = yup
  .object({
    user_name: yup.string().required().label("Name"),
    user_email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone Number"),
    organization: yup.string().required().label("Organization"),
    userType: yup.string().required().label("Who are you"),
    howDidYouHear: yup.string().required().label("How did you hear about us"),
    message: yup.string().required().label("Message"),
  })
  .required();

export default function RSVP() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const form = useRef<HTMLFormElement>(null);

  const sendToBackend = async (data: FormData) => {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const result = await res.json();

      const orderNumber =
        "Metaed" + Math.random().toString(36).substr(2, 8).toUpperCase();
      const registrationDate = new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
        .toUpperCase();

      toast.success("Registration Successful!");
      reset();

      router.push(
        `/ticket?name=${encodeURIComponent(
          data.user_name
        )}&email=${encodeURIComponent(
          data.user_email
        )}&order=${orderNumber}&date=${registrationDate}`
      );
    } catch (error) {
      console.error("Failed to send RSVP data:", error);
      toast.error("Registration Failed");
    }
  };

  return (
    <section className="contact-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info-wrap">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <InjectableSvg
                      src="assets/img/icons/map.svg"
                      alt="img"
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Address</h4>
                    <p>
                      Venue <br />
                      Location & time
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <InjectableSvg
                      src="assets/img/icons/user.svg"
                      alt="img"
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Event name</h4>
                    <Link href="#">here</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <h4 className="title">RSVP Form</h4>
              <p>Please fill in your details. Required fields are marked *</p>
              <form
                ref={form}
                onSubmit={handleSubmit(sendToBackend)}
                id="rsvp-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("user_name")}
                        type="text"
                        placeholder="Full Name *"
                        required
                      />
                      <p className="form_error">{errors.user_name?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone Number *"
                        required
                      />
                      <p className="form_error">{errors.phone?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("user_email")}
                        type="email"
                        placeholder="Email Address *"
                        required
                      />
                      <p className="form_error">{errors.user_email?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("organization")}
                        type="text"
                        placeholder="Organization/Company *"
                        required
                      />
                      <p className="form_error">
                        {errors.organization?.message}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <select
                        {...register("userType")}
                        className="form-select"
                        required
                      >
                        <option value="">Who are you? *</option>
                        <option value="industry_expert">Industry Expert</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                      <p className="form_error">{errors.userType?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <select
                        {...register("howDidYouHear")}
                        className="form-select"
                        required
                      >
                        <option value="">
                          How did you learn about this event? *
                        </option>
                        <option value="social_media">Social Media</option>
                        <option value="friend">Friend/Colleague</option>
                        <option value="search">Search Engine</option>
                        <option value="email">Email</option>
                        <option value="other">Other</option>
                      </select>
                      <p className="form_error">
                        {errors.howDidYouHear?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-grp">
                  <textarea
                    {...register("message")}
                    placeholder="Additional Message (optional)"
                    rows={4}
                  ></textarea>
                  <p className="form_error">{errors.message?.message}</p>
                </div>
                <button type="submit" className="btn btn-two arrow-btn">
                  Submit RSVP <BtnArrow />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.97702469126!2d80.3286369754244!3d26.47342077691173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c389b672bb369%3A0x4cc7d9521cd441e8!2sMall%20Rd%2C%20Kanpur%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1734158022381!5m2!1sen!2sin"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
