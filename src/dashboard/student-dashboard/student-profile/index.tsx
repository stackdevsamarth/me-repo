import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentProfileArea from './StudentProfileArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentProfile = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentProfileArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentProfile
