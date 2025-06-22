import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentHistoryArea from './StudentHistoryArea'
import HeaderThree from '@/layouts/headers/HeaderThree'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentHistory = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentHistoryArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentHistory

