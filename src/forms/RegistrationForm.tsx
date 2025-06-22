// "use client";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import BtnArrow from "@/svg/BtnArrow";
// import Link from "next/link";

// interface FormData {
//   fname: string;
//   lname: string;
//   email: string;
//   password: string;
// }

// const schema = yup
//   .object({
//     fname: yup.string().required().label("First Name"),
//     lname: yup.string().required().label("Last Name"),
//     email: yup.string().required().email().label("Email"),
//     password: yup
//       .string()
//       .required()
//       .min(8, "Password must be at least 8 characters long")
//       .matches(/[A-Z]/, "Password must contain an uppercase letter")
//       .matches(/[a-z]/, "Password must contain a lowercase letter")
//       .matches(/[0-9]/, "Password must contain a number")
//       .matches(/[!@#$%^&*]/, "Password must contain a special character")
//       .label("Password"),
//   })
//   .required();

// const RegistrationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({ resolver: yupResolver(schema) });
//   const onSubmit = (data: FormData) => {
//     const notify = () =>
//       toast("Registration successfully", { position: "top-center" });
//     notify();
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="account__form">
//       <div className="row gutter-20">
//         <div className="col-md-6">
//           <div className="form-grp">
//             <label htmlFor="fast-name">First Name</label>
//             <input
//               type="text"
//               {...register("fname")}
//               id="fast-name"
//               placeholder="First Name"
//             />
//             <p className="form_error">{errors.fname?.message}</p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="form-grp">
//             <label htmlFor="last-name">Last name</label>
//             <input
//               type="text"
//               {...register("lname")}
//               id="last-name"
//               placeholder="Last name"
//             />
//             <p className="form_error">{errors.lname?.message}</p>
//           </div>
//         </div>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           {...register("email")}
//           id="email"
//           placeholder="email"
//         />
//         <p className="form_error">{errors.email?.message}</p>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           {...register("password")}
//           id="password"
//           placeholder="password"
//         />
//         <p className="form_error">{errors.password?.message}</p>
//       </div>

//       <button type="submit" className="btn btn-two arrow-btn">
//         Sign Up
//         <BtnArrow />
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;

"use client";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BtnArrow from "@/svg/BtnArrow";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    fname: yup.string().required("First Name is required").label("First Name"),
    lname: yup.string().required("Last Name is required").label("Last Name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email address")
      .label("Email"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[a-z]/, "Password must contain a lowercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(/[!@#$%^&*]/, "Password must contain a special character")
      .label("Password"),
  })
  .required();

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Registration failed");

      toast("Registration successful", { position: "top-center" });
      reset();
    } catch (err) {
      toast.error((err as Error).message, { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form">
      <div className="row gutter-20">
        <div className="col-md-6">
          <div className="form-grp">
            <label htmlFor="fast-name">First Name</label>
            <input
              type="text"
              {...register("fname")}
              id="fast-name"
              placeholder="First Name"
              aria-invalid={!!errors.fname}
              aria-describedby="fname-error"
            />
            <p className="form_error" id="fname-error">
              {errors.fname?.message}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              {...register("lname")}
              id="last-name"
              placeholder="Last Name"
              aria-invalid={!!errors.lname}
              aria-describedby="lname-error"
            />
            <p className="form_error" id="lname-error">
              {errors.lname?.message}
            </p>
          </div>
        </div>
      </div>
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Email"
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        <p className="form_error" id="email-error">
          {errors.email?.message}
        </p>
      </div>
      <div className="form-grp">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password")}
          id="password"
          placeholder="Password"
          aria-invalid={!!errors.password}
          aria-describedby="password-error"
        />
        <p className="form_error" id="password-error">
          {errors.password?.message}
        </p>
      </div>

      <button type="submit" className="btn btn-two arrow-btn">
        Sign Up
        <BtnArrow />
      </button>
    </form>
  );
};

export default RegistrationForm;
