import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Blog Details" sub_title="Blogs" sub_title_2="How To Become idiculously Self-Aware In 20 Minutes" style={true} /> */}
            <BlogDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogDetails

