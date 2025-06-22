import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Contact With Us" sub_title="Contact" /> */}
            <ContactArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Contact

