import { StaticImageData } from "next/image";

import av1 from "@/assets/img/instructor/av1.jpg";
import av2 from "@/assets/img/instructor/av2.jpg";

interface DataType {
   id: number;
   page: string;
   avatar: StaticImageData;
   rating?: string;
   title: string;
   designation: string;
   desc: string;
}[];

const testimonial_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      avatar: av1,
      rating: "(4.8 Ratings)",
      title: "Rounak Tripathi",
      designation: "Student",
      desc: "MetaEdSchool has been a game-changer for me! The hands-on experience with AI and Web3 has significantly enhanced my technical skills and understanding. I highly recommend it to anyone looking to upskill.",
   },
   {
      id: 2,
      page: "home_2",
      avatar: av2,
      rating: "(4.8 Ratings)",
      title: "Sharad Pandey",
      designation: "Student",
      desc: "Attending MetaEdSchool workshops has been an eye-opener. The structured courses and expert guidance helped me build AI projects confidently. It’s truly a platform for future tech leaders!",
   },
   {
      id: 3,
      page: "home_2",
      avatar: av1,
      rating: "(4.8 Ratings)",
      title: "Hritik Yadav",
      designation: "Student",
      desc: "The mentorship and practical approach at MetaEdSchool have been incredible. The AI-focused sessions have given me a deep insight into real-world applications, making learning exciting and industry-relevant.",
   },
   {
      id: 4,
      page: "home_2",
      avatar: av2,
      rating: "(4.8 Ratings)",
      title: "Priyanshu Batham",
      designation: "Student",
      desc: "The workshops conducted by MetaEdSchool are industry-oriented and well-structured. Learning AI with real-world applications has given me a solid foundation for my career.",
   },
   {
      id: 5,
      page: "home_2",
      avatar: av1,
      rating: "(4.8 Ratings)",
      title: "Aaditya Kumar Singh",
      designation: "Student",
      desc: "MetaEdSchool provides the perfect blend of education and practical exposure. The AI boot camps and collaborative projects have been immensely beneficial in shaping my tech journey.",
   },
   {
      id: 6,
      page: "home_2",
      avatar: av1,
      rating: "(4.8 Ratings)",
      title: "Arpit Tiwari",
      designation: "Student",
      desc: "Thanks to MetaEdSchool, I now have a clear understanding of AI and its real-world applications. The community is supportive, and the learning experience is outstanding!",
   },
   {
      id: 7,
      page: "home_2",
      avatar: av1,
      rating: "(4.8 Ratings)",
      title: "Anmol Tripathi",
      designation: "Intern (Bellavita Organic)",
      desc: "Learning AI at MetaEdSchool has been a fantastic experience! The well-structured curriculum and mentorship from experts make it an ideal place for students eager to explore new technologies.",
   },
   // {
   //    id: 1,
   //    page: "home_3",
   //    avatar: testi_avatar6,
   //    rating: "(4.8 Ratings)",
   //    title: "Wade Warren",
   //    designation: "Designer",
   //    desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   // },
   // {
   //    id: 2,
   //    page: "home_3",
   //    avatar: testi_avatar7,
   //    title: "Jenny Wilson",
   //    designation: "Designer",
   //    desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   // },
   // {
   //    id: 3,
   //    page: "home_3",
   //    avatar: testi_avatar8,
   //    title: "Kristin Watson",
   //    designation: "Designer",
   //    desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   // },
   // {
   //    id: 4,
   //    page: "home_3",
   //    avatar: testi_avatar7,
   //    title: "Jenny Wilson",
   //    designation: "Designer",
   //    desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   // },
];

export default testimonial_data;