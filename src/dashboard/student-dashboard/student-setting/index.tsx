import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentSettingArea from './StudentSettingArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentSetting = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentSettingArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentSetting

