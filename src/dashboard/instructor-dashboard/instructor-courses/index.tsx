import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import InstructorEnrolledCourseArea from '../instructor-enrolled-courses/InstructorEnrolledCourseArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const InstructorCourses = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <InstructorEnrolledCourseArea style={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default InstructorCourses
