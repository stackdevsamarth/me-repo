import StudentDashboard from "@/dashboard/student-dashboard/student-dashboard";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Dashboard | Metaedschool",
};
const index = () => {
   return (
      <Wrapper>
         <StudentDashboard />
      </Wrapper>
   )
}

export default index