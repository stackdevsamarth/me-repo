import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import StudentDashboardArea from './StudentDashboardArea'

const StudentDashboard = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentDashboardArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentDashboard
