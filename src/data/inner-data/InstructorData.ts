import { StaticImageData } from "next/image";

import instructor_img1 from "@/assets/img/instructor/instructor01.png";
import instructor_img2 from "@/assets/img/instructor/instructor02.png";
import instructor_img3 from "@/assets/img/instructor/instructor03.png";
import instructor_img4 from "@/assets/img/instructor/instructor04.png";
import instructor_img5 from "@/assets/img/instructor/instructor05.png";
import instructor_img6 from "@/assets/img/instructor/instructor06.png";
import instructor_img7 from "@/assets/img/instructor/instructor07.png";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   degisnation: string;
}[];

const inner_instructor_data: DataType[] = [
   {
      id: 1,
      page: "inner_1",
      thumb: instructor_img1,
      name: "Samarth Mishra",
      degisnation: "Founder",
   },
   // {
   //    id: 2,
   //    page: "inner_1",
   //    thumb: instructor_img7,
   //    name: "Priyanshi Brambhatt",
   //    degisnation: "CFO",
   // },
   {
      id: 3,
      page: "inner_1",
      thumb: instructor_img2,
      name: "Kushika Agarwal",
      degisnation: "CTO",
   },
   {
      id: 4,
      page: "inner_1",
      thumb: instructor_img3,
      name: "Pushpendra Gupta",
      degisnation: "CMO",
   },
   // {
   //    id: 5,
   //    page: "inner_1",
   //    thumb: instructor_img4,
   //    name: "Mohd. Ayaan",
   //    degisnation: "Operational Head",
   // },
   {
      id: 6,
      page: "inner_1",
      thumb: instructor_img5,
      name: "Sandeep Singh",
      degisnation: "Operation Head",
   },
   {
      id: 7,
      page: "inner_1",
      thumb: instructor_img6,
      name: "Rupal Rathore",
      degisnation: "Community Relationship Manager",
   },
   
   // {
   //    id: 8,
   //    page: "inner_1",
   //    thumb: instructor_img8,
   //    name: "Mark Jukarberg",
   //    degisnation: "UX Design Lead",
   // },
   // {
   //    id: 9,
   //    page: "inner_1",
   //    thumb: instructor_img9,
   //    name: "Sandy J. Rankin",
   //    degisnation: "Web Development",
   // },
];

export default inner_instructor_data;