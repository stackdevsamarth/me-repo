// "use client";

// import BtnArrow from "@/svg/BtnArrow";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { signIn } from "next-auth/react";

// interface FormData {
//   email: string;
//   password: string;
// }

// const LoginForm: React.FC = () => {
//   const schema = yup
//     .object({
//       email: yup.string().required("Email is required").email("Invalid email"),
//       password: yup.string().required("Password is required"),
//     })
//     .required();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     try {
//       const result = await signIn("credentials", {
//         email: data.email,
//         password: data.password,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error(result.error, { position: "top-center" });
//       } else {
//         console.log(data);
//         toast.success("Login successful!", { position: "top-center" });
//         window.location.href = "/"; // Redirect after successful login
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred during login", { position: "top-center" });
//     } finally {
//       reset();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="account__form">
//       <div className="form-grp">
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           {...register("email")}
//           type="text"
//           placeholder="Email"
//         />
//         <p className="form_error">{errors.email?.message}</p>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//         />
//         <p className="form_error">{errors.password?.message}</p>
//       </div>
//       <div className="account__check">
//         <div className="account__check-remember">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="terms-check"
//           />
//           <label htmlFor="terms-check" className="form-check-label">
//             Remember me
//           </label>
//         </div>
//         <div className="account__check-forgot">
//           <Link href="/registration">Forgot Password?</Link>
//         </div>
//       </div>
//       <button type="submit" className="btn btn-two arrow-btn">
//         Sign In
//         <BtnArrow />
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

"use client";

import BtnArrow from "@/svg/BtnArrow";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const schema = yup.object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log("Attempting login with:", data);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, // Prevent automatic redirect
      });

      if (result?.error) {
        console.error("Login error:", result.error);
        toast.error(result.error, { position: "top-center" });
      } else {
        console.log("Login successful:", result);
        toast.success("Login successful!", { position: "top-center" });
        window.location.href = "/student-dashboard"; // Redirect after successful login
        reset();
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form">
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          type="text"
          placeholder="Email"
          className={errors.email ? "input-error" : ""}
        />
        <p className="form_error">{errors.email?.message}</p>
      </div>

      <div className="form-grp">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password")}
          type="password"
          placeholder="Password"
          className={errors.password ? "input-error" : ""}
        />
        <p className="form_error">{errors.password?.message}</p>
      </div>

      <div className="account__check">
        <div className="account__check-remember">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms-check"
          />
          <label htmlFor="terms-check" className="form-check-label">
            Remember me
          </label>
        </div>
        <div className="account__check-forgot">
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-two arrow-btn"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"} <BtnArrow />
      </button>
    </form>
  );
};

export default LoginForm;
