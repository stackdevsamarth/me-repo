"use client";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import { useEffect, useState } from 'react';
import EventDetailsArea from "./EventDetailsArea";

interface Props {
  Id: string;
}

const EventDetails: React.FC<Props> = ({ Id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvent = async () => {
      if (!Id) {
        setError('Event ID is required');
        setIsLoading(false);
        return;
      }

      try {
        // Add your data validation here
        // For example, check if the ID exists in your database
        // const event = await fetchEvent(Id);
        // if (!event) throw new Error('Event not found');
        
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load event');
        setIsLoading(false);
      }
    };

    loadEvent();
  }, [Id]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <EventDetailsArea eventId={Id} />
      </main>
      <FooterOne />
    </>
  );
};

export default EventDetails;

// "use client";
// import HeaderOne from "@/layouts/headers/HeaderOne";
// import FooterOne from "@/layouts/footers/FooterOne";
// import { useEffect, useState } from 'react';
// import EventDetailsArea from "./EventDetailsArea";

// interface Props {
//   Id: string;
// }

// const EventDetails: React.FC<Props> = ({ Id }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [eventData, setEventData] = useState(null);

//   useEffect(() => {
//     if (Id) {
//       // Add your data fetching logic here if needed
//       setIsLoading(false);
//     }
//   }, [Id]);

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner">Loading...</div>
//       </div>
//     );
//   }

//   if (!Id) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <>
//       <HeaderOne />
//       <main className="main-area fix">
//         <EventDetailsArea eventId={Id} />
//       </main>
//       <FooterOne />
//     </>>
//   );
// };

// export default EventDetails;
