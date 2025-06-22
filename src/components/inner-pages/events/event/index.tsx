import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import EventArea from "./EventArea"

const Event = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="All Events" sub_title="Events" /> */}
            <EventArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Event

