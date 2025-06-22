import Event from "@/components/inner-pages/events/event";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Event | Metaedschool",
};
const page = () => {
   return (
      <Wrapper>
         <Event />
      </Wrapper>
   )
}

export default page