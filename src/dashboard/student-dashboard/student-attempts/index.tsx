import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentAttemptsArea from './StudentAttemptsArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentAttempts = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentAttemptsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentAttempts

