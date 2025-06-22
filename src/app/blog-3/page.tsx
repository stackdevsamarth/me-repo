import BlogThree from "@/components/blogs/blog-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blogs | Metaedschool",
};
const index = () => {
   return (
      <Wrapper>
         <BlogThree />
      </Wrapper>
   )
}

export default index