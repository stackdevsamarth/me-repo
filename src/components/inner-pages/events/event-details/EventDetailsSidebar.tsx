// import Link from "next/link";
// import Image from "next/image";
// import BtnArrow from "@/svg/BtnArrow";
// import event_details_img1 from "@/assets/img/icons/calendar.svg";
// import event_details_img2 from "@/assets/img/icons/course_icon02.svg";
// import event_details_img4 from "@/assets/img/icons/course_icon04.svg";
// import event_details_img6 from "@/assets/img/icons/course_icon06.svg";
// import event_details_img7 from "@/assets/img/others/payment.png";

// interface Props {
//   eventId: string;
//   eventBy?: string;
//   eventDate?: string;
//   eventTime?: string;
//   seats?: number;
// }

// const EventDetailsSidebar: React.FC<Props> = ({
//   eventId,
//   eventBy,
//   eventDate,
//   eventTime,
//   seats,
// }) => {

//   return (
//     <aside className="event__sidebar">
//       <div className="event__widget">
//         <div className="courses__details-sidebar">
//           <div className="courses__information-wrap">
//             <h5 className="title">Event Information:</h5>
//             <ul className="list-wrap">
//               <li>
//                 <Image src={event_details_img1} alt="Date Icon" />
//                 Date <span>{eventDate || "N/A"}</span>
//               </li>
//               <li>
//                 <Image src={event_details_img2} alt="Time Icon" />
//                 Time <span>{eventTime || "N/A"}</span>
//               </li>
//               <li>
//                 <Image src={event_details_img4} alt="By Icon" />
//                 Hosted By <span>{eventBy || "N/A"}</span>
//               </li>
//               <li>
//                 <Image src={event_details_img6} alt="Seats Icon" />
//                 Total Seats <span>{seats ?? "N/A"}</span>
//               </li>
//             </ul>
//           </div>
//           <div className="courses__payment">
//             <h5 className="title">Secure Payment:</h5>
//             <Image src={event_details_img7} alt="img" />
//           </div>
//           <div className="courses__details-social">
//             <h5 className="title">Share this course:</h5>
//             <ul className="list-wrap">
//               <li>
//                 <Link href="#">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#">
//                   <i className="fab fa-twitter"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#">
//                   <i className="fab fa-whatsapp"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#">
//                   <i className="fab fa-instagram"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#">
//                   <i className="fab fa-youtube"></i>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="courses__details-enroll">
//             <div className="tg-button-wrap">
//               <Link href="/attend" className="btn arrow-btn">
//                 Join This Event <BtnArrow />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default EventDetailsSidebar;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BtnArrow from "@/svg/BtnArrow";
import event_details_img1 from "@/assets/img/icons/calendar.svg";
import event_details_img2 from "@/assets/img/icons/course_icon02.svg";
import event_details_img4 from "@/assets/img/icons/course_icon04.svg";
import event_details_img6 from "@/assets/img/icons/course_icon06.svg";
import event_details_img7 from "@/assets/img/others/payment.png";

interface Props {
  eventId: string;
}

const EventDetailsSidebar: React.FC<Props> = ({ eventId }) => {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`/api/eventdetails/${eventId}`);
        const data = await response.json();

        if (response.ok) {
          setEventData(data);
        } else {
          setError(data.message || "Error fetching event data");
        }
      } catch (error) {
        setError("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <aside className="event__sidebar">
      <div className="event__widget">
        <div className="courses__details-sidebar">
          <div className="courses__information-wrap">
            <h5 className="title">Event Information:</h5>
            <ul className="list-wrap">
              <li>
                <Image src={event_details_img1} alt="Date Icon" />
                Date{" "}
                <span>
                  {new Date(eventData.event_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </li>
              <li>
                <Image src={event_details_img2} alt="Time Icon" />
                Time <span>{eventData.event_time || "N/A"}</span>
              </li>
              <li>
                <Image src={event_details_img4} alt="By Icon" />
                Hosted By <span>{eventData.event_by || "N/A"}</span>
              </li>
              <li>
                <Image src={event_details_img6} alt="Seats Icon" />
                Total Seats <span>{eventData.seats ?? "N/A"}</span>
              </li>
            </ul>
          </div>
          <div className="courses__payment">
            <h5 className="title">Secure Payment:</h5>
            <Image src={event_details_img7} alt="Payment" />
          </div>
          <div className="courses__details-social">
            <h5 className="title">Share this course:</h5>
            <ul className="list-wrap">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="courses__details-enroll">
            <div className="tg-button-wrap">
              <Link href={`/attend/${eventId}`} className="btn arrow-btn">
                Join This Event <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default EventDetailsSidebar;
