import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Blogsarea from "./blogsarea"

const Blogs = () => {
   
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <BreadcrumbOne title="Blogs" sub_title="Publish your own blog" />
            <Blogsarea />
         </main>
         <FooterOne />
      </>
   )
}

export default Blogs

