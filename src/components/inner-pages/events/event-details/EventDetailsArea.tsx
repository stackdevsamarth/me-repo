// import Image from "next/image";
// import EventDetailsSidebar from "./EventDetailsSidebar";
// import Link from "next/link";

// import event_details_img1 from "@/assets/img/events/event_details_img.jpg";
// import event_details_img2 from "@/assets/img/courses/course_author001.png";
// import event_details_img3 from "@/assets/img/events/event_details_img02.jpg";

// interface Props {
//   eventId: string;
// }
// const EventDetailsArea: React.FC<Props> = ({ eventId }) => {
//   console.log("Event ID:", eventId);
//   return (
//     <section className="event__details-area section-py-120">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="event__details-thumb">
//               <Image src={event_details_img1} alt="img" />
//             </div>
//             <div className="event__details-content-wrap">
//               <div className="row">
//                 <div className="col-70">
//                   <div className="event__details-content">
//                     <div className="event__details-content-top">
//                       <Link href="/courses" className="tag">
//                         Development
//                       </Link>
//                       <span className="avg-rating">
//                         <i className="fas fa-star"></i>(4.8 Reviews)
//                       </span>
//                     </div>
//                     <h2 className="title">
//                       How To Become idiculously Self-Aware In 20 Minutes
//                     </h2>
//                     <div className="event__meta">
//                       <ul className="list-wrap">
//                         <li className="author">
//                           <Image src={event_details_img2} alt="img" />
//                           By
//                           <Link href="/instructor-details">David Millar</Link>
//                         </li>
//                         <li className="location">
//                           <i className="flaticon-placeholder"></i>
//                           LocationWashington DC, MI 2726
//                         </li>
//                         <li>
//                           <i className="flaticon-mortarboard"></i>2,250 Students
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="event__details-overview">
//                       <h4 className="title-two">Event Overview</h4>
//                       <p>
//                         Dorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor incididunt ut labore et dolore
//                         magna aliqua Quis ipsum suspendisse ultrices gravida.
//                         Risus commodo viverra maecenas accumsan lacus vel
//                         facilisis.dolor sit amet, consectetur adipiscing elited
//                         do eiusmod tempor incididunt ut labore et dolore magna
//                         aliqua.
//                       </p>
//                     </div>
//                     <h4 className="title-two">
//                       What you&apos;ll learn in this event?
//                     </h4>
//                     <p>
//                       Dorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua Quis ipsum suspendisse ultrices gravida. Risus
//                       commodo viverra maecenas accumsan.
//                     </p>

//                     <div className="event__details-inner">
//                       <div className="row">
//                         <div className="col-39">
//                           <Image src={event_details_img3} alt="img" />
//                         </div>
//                         <div className="col-61">
//                           <div className="event__details-inner-content">
//                             <h4 className="title">
//                               Four major elements that we offer <br /> for this
//                               event
//                             </h4>
//                             <ul className="about__info-list list-wrap">
//                               <li className="about__info-list-item">
//                                 <i className="flaticon-angle-right"></i>
//                                 <p className="content">
//                                   Work with color & Gradients & Grids
//                                 </p>
//                               </li>
//                               <li className="about__info-list-item">
//                                 <i className="flaticon-angle-right"></i>
//                                 <p className="content">
//                                   All the useful shortcuts
//                                 </p>
//                               </li>
//                               <li className="about__info-list-item">
//                                 <i className="flaticon-angle-right"></i>
//                                 <p className="content">
//                                   Be able to create Flyers, Brochures,
//                                   Advertisements
//                                 </p>
//                               </li>
//                               <li className="about__info-list-item">
//                                 <i className="flaticon-angle-right"></i>
//                                 <p className="content">
//                                   How to work with Images & Text
//                                 </p>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <p>
//                       Morem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua Quis ipsum suspendisse ultrices gravida. Risus
//                       commodo viverra maecenas accumsan.Dorem ipsum dolor sit
//                       amet, consectetur adipiscing elit, sed do eiusmod tempor
//                       incididunt ut labore et dolore magn.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-30">
//                   <EventDetailsSidebar />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetailsArea;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EventDetailsSidebar from "./EventDetailsSidebar";

interface Props {
  eventId: string;
}

interface EventData {
  id: number;
  event_name: string;
  description: string;
  location: string;
  event_by: string;
  event_date: string;
  event_time: string;
  seats: number;
}

const EventDetailsArea: React.FC<Props> = ({ eventId }) => {
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/eventdetails/${eventId}`
        );
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.error("Failed to fetch event:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!eventData) return <p>Loading...</p>;

  return (
    <section className="event__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="event__details-thumb">
              {/* Placeholder image */}
              <Image
                src="/placeholder.jpg"
                alt="Event"
                width={800}
                height={400}
              />
            </div>
            <div className="event__details-content-wrap">
              <div className="row">
                <div className="col-70">
                  <div className="event__details-content">
                    <div className="event__details-content-top">
                      <Link href="#" className="tag">
                        Development
                      </Link>
                      <span className="avg-rating">
                        <i className="fas fa-star"></i> (4.8 Reviews)
                      </span>
                    </div>
                    <h2 className="title">{eventData.event_name}</h2>
                    <div className="event__meta">
                      <ul className="list-wrap">
                        <li className="author">
                          By <Link href="#">{eventData.event_by}</Link>
                        </li>
                        <li className="location">
                          <i className="flaticon-placeholder"></i>
                          Location: {eventData.location}
                        </li>
                        <li>
                          <i className="flaticon-calendar"></i>
                          Date: {eventData.event_date}
                        </li>
                        <li>
                          <i className="flaticon-clock"></i>
                          Time: {eventData.event_time}
                        </li>
                        <li>
                          <i className="flaticon-seat"></i>
                          Seats: {eventData.seats}
                        </li>
                      </ul>
                    </div>

                    <div className="event__details-overview">
                      <h4 className="title-two">Event Overview</h4>
                      <p>{eventData.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-30">
                  <EventDetailsSidebar eventId={eventId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsArea;
