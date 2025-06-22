import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentEnrolledCoursesArea from './StudentEnrolledCoursesArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentEnrolledCourses = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentEnrolledCoursesArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentEnrolledCourses
