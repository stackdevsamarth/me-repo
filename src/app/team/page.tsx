import Instructors from "@/components/inner-pages/instructors/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Team Metaedschool",
};
const index = () => {
   return (
      <Wrapper>
         <Instructors />
      </Wrapper>
   )
}

export default index