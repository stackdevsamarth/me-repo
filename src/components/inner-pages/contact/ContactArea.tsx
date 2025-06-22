import ContactForm from "@/forms/ContactForm"
import InjectableSvg from "@/hooks/InjectableSvg"
import Link from "next/link"

const ContactArea = () => {
   return (
      <section className="contact-area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="contact-info-wrap">
                     <ul className="list-wrap">
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/map.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Address</h4>
                              <p>The Mall Road, Downtown  <br /> KANPUR, UTTAR PRADESH</p>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/contact_phone.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Phone</h4>
                              <Link href="tel:0123456789">+ (91) 8081249309</Link>
                              {/* <Link href="tel:0123456789">+1 (800) 123 456 789</Link> */}
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/emial.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">E-mail Address</h4>
                              <Link href="mailto:info@gmail.com">connect@metaedschool.com</Link>
                              <Link href="mailto:info@gmail.com">infometedschool@gmail.com</Link>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="contact-form-wrap">
                     <h4 className="title">Send Us Message</h4>
                     <p>Your email address will not be published. Required fields are marked *</p>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.97702469126!2d80.3286369754244!3d26.47342077691173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c389b672bb369%3A0x4cc7d9521cd441e8!2sMall%20Rd%2C%20Kanpur%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1734158022381!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
