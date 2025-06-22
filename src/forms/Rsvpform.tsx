"use client"
import BtnArrow from "@/svg/BtnArrow";
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useRouter } from 'next/navigation';

interface FormData {
   user_name: string;
   user_email: string;
   web: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      web: yup.string().required().label("Website"),
      message: yup.string().required().label("Message"),
   })
   .required();

const Rsvp = () => {
   const router = useRouter();
   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });
   const form = useRef<HTMLFormElement>(null);

   const sendEmail = async (data: FormData) => {
      if (form.current) {
         try {
            await emailjs.sendForm('themegenix', 'template_hdr7ic6', form.current, 'QOBCxT0bzNKEs-CwW');
            
            // Generate order number and registration date
            const orderNumber = 'metaed' + Math.random().toString(36).substr(2, 8).toUpperCase();
            const registrationDate = new Date().toLocaleDateString('en-US', {
               year: 'numeric',
               month: 'short',
               day: '2-digit'
            }).toUpperCase();

            toast.success('Registration Successful!');
            reset();

            // Redirect to ticket page with form data
            router.push(`/app/ticket?name=${encodeURIComponent(data.user_name)}&email=${encodeURIComponent(data.user_email)}&order=${orderNumber}&date=${registrationDate}`);
            
         } catch (error) {
            toast.error('Registration Failed');
            console.error(error);
         }
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="rsvp-form">
         <div className="form-grp">
            <textarea {...register("message")} placeholder="Message" required></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <div className="row">
            <div className="col-md-4">
               <div className="form-grp">
                  <input {...register("user_name")} type="text" placeholder="Name *" required />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="form-grp">
                  <input {...register("user_email")} type="email" placeholder="E-mail *" required />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="form-grp">
                  <input {...register("web")} type="url" placeholder="Parent/student/organisation *" required />
                  <p className="form_error">{errors.web?.message}</p>
               </div>
            </div>
         </div>
         <button type="submit" className="btn btn-two arrow-btn">Submit Now <BtnArrow /></button>
      </form>
   );
};

export default Rsvp;
