import Blogs from "@/components/blogs/blogs";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Metaedschool",
};
const index = () => {
   return (
      <Wrapper>
         <Blogs />
      </Wrapper>
   )
}

export default index