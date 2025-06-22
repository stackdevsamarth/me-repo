"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const EventArea = () => {
  const [events, setEvents] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events"); // default is GET
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = events.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(events.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % events.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="event__area-two section-py-120">
      <div className="container">
        <div className="event__inner-wrap">
          <div className="row justify-content-center">
            {currentItems.map((item: any) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="event__item shine__animate-item">
                  <div className="event__item-thumb">
                    <Link
                      href="/events-details"
                      className="shine__animate-link"
                    >
                      {/* You can adjust this depending on your image URL structure */}
                      <Image
                        src={item.thumb || "/default.jpg"}
                        alt="img"
                        width={400}
                        height={250}
                      />
                    </Link>
                  </div>
                  <div className="event__item-content">
                    {/* <span className="date">{item.event_date}</span> */}
                    <span className="date">
                      {new Date(item.event_date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="time">Event Time: {item.event_time}</span>
                    <h2 className="title">
                      <Link href={`/events-details/${item.id}`}>
                        {item.event_name}
                      </Link>
                    </h2>
                    <Link
                      href="https://maps.google.com/maps"
                      className="location"
                      target="_blank"
                    >
                      <i className="flaticon-map"></i>
                      {item.location}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav className="pagination__wrap mt-30">
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              className="list-wrap"
            />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EventArea;
