"use client"
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';

const TicketContent = () => {
   const searchParams = useSearchParams();
   const [qrCode, setQrCode] = useState('');

   const name = searchParams?.get('name') || '';
   const email = searchParams?.get('email') || '';
   const orderNumber = searchParams?.get('order') || '';
   const registrationDate = searchParams?.get('date') || '';

   useEffect(() => {
      const qrData = `Name: ${name}\nEmail: ${email}\nOrder: ${orderNumber}`;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
      setQrCode(qrUrl);
   }, [name, email, orderNumber]);

   return (
      <section className="courses__details-area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-8">
                  <div className="courses__details-thumb">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.97702469126!2d80.3286369754244!3d26.47342077691173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c389b672bb369%3A0x4cc7d9521cd441e8!2sMall%20Rd%2C%20Kanpur%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1734158022381!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     />
                  </div>
                  <div className="courses__details-content">
                     <h2 className="title">Build with AI 2025 - Kanpur</h2>
                     <div className="courses__details-meta">
                        <ul className="list-wrap">
                           <li>
                              <i className="flaticon-calendar"></i>
                              APR 20, 2025, 11:00 AM (IST)
                           </li>
                           <li>
                              <i className="flaticon-location"></i>
                              Senate hall CSJM University, Kanpur
                           </li>
                        </ul>
                     </div>
                     <div className="ticket-details mt-4">
                        <div className="row">
                           <div className="col-md-8">
                              <div className="ticket-info">
                                 <h4>ISSUED TO</h4>
                                 <p className="mb-3">{name}</p>
                                 
                                 <h4>ORDER NUMBER</h4>
                                 <p>{orderNumber}</p>
                                 <p>Registered</p>
                                 <p className="mb-3">{registrationDate}</p>
                                 
                                 <h4>TICKET TYPE</h4>
                                 <p>Metaed workshop</p>
                                 <p>2025 Kanpur - Regular</p>
                                 <p>RSVP</p>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="qr-code-container text-center">
                                 {qrCode && (
                                    <Image 
                                       src={qrCode} 
                                       alt="Ticket QR Code" 
                                       width={200} 
                                       height={200} 
                                       className="qr-code"
                                    />
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ticket-footer text-center mt-8 text-sm text-gray-500">
            © 2025 Metaedchool.com - All Rights Reserved.
         </div>
      </section>
   );
};

function TicketPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TicketContent />
    </Suspense>
  );
}
export default TicketPage;