import Login from "@/components/inner-pages/login";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Metaedschool",
};
const index = () => {
   return (
      <Wrapper>
         <Login />
      </Wrapper>
   )
}

export default index