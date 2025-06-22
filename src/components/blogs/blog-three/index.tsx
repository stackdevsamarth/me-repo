import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import BlogThreeArea from "./BlogThreeArea"

const BlogThree = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Blog Full Width" sub_title="Blogs" /> */}
            <BlogThreeArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogThree;

