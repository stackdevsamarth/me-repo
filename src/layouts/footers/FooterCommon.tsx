import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo.png"

const FooterCommon = () => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget">
               <div className="logo mb-35">
                  <Link href="/"><Image src={logo} width={200} height={200} alt="img" /></Link>
               </div>
               <div className="footer__content">
                  <p>Empowering Future Leaders</p>
                  <ul className="list-wrap">
                     <li> Downtown, Kanpur, Uttar Pradesh</li>
                     <li>+91-9452880889</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Useful Links</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link href="#">Our values</Link></li>
                     <li><Link href="#">Our advisory board</Link></li>
                     <li><Link href="#">Our partners</Link></li>
                     <li><Link href="#">Become a partner</Link></li>
                     <li><Link href="#">Work at Future Learn</Link></li>
                     <li><Link href="#">Quizlet Plus</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Our Company</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link href="/contact">Contact Us</Link></li>
                     <li><Link href="#">Become Mentor</Link></li>
                     <li><Link href="#">Blog</Link></li>
                     <li><Link href="#">Instructor</Link></li>
                     <li><Link href="#">Events</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}

export default FooterCommon
