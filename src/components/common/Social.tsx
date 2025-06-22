import InjectableSvg from "@/hooks/InjectableSvg"; // Importing the InjectableSvg component
import Link from "next/link"; // Importing the Link component from Next.js for routing

const Social = () => {
   return (
      <>
         {/* Facebook link with SVG icon */}
         <li>
            <Link href="https://www.facebook.com/profile.php?id=61566895897978" target="_blank">
               <InjectableSvg src="/assets/img/icons/facebook.svg" alt="img" className="injectable" />
            </Link>
         </li>

         {/* Twitter link with SVG icon */}
         <li>
            <Link href="https://x.com/metaedschool" target="_blank">
               <InjectableSvg src="/assets/img/icons/twitter.svg" alt="img" className="injectable" />
            </Link>
         </li>

         {/* WhatsApp link (currently commented out) */}
         {/* <li>
            <Link href="https://www.facebook.com/" target="_blank">
               <InjectableSvg src="/assets/img/icons/whatsapp.svg" alt="img" className="injectable" />
            </Link>
         </li> */}

         {/* Instagram link with SVG icon */}
         <li>
            <Link href="https://www.instagram.com/metaedschool" target="_blank">
               <InjectableSvg src="/assets/img/icons/instagram.svg" alt="img" className="injectable" />
            </Link>
         </li>

         {/* YouTube link with SVG icon */}
         <li>
            <Link href="https://www.linkedin.com/company/metaedschool" target="_blank" className="fab fa-linkedin-in">
               {/* <InjectableSvg src="/assets/img/icons/linkedin.svg" alt="img" className="injectable" /> */}
            </Link>
         </li>
      </>
   )
}

export default Social // Exporting the Social component for use in other parts of the app
