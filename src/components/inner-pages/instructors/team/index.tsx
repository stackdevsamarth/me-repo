import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import InstructorArea from "./team"

const Instructors = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="All Instructors" sub_title="Instructors" /> */}
            <InstructorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Instructors
