import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import DashboardHomeArea from './DashboardHomeArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const DashboardHome = () => {
  return (
    <>
      <HeaderTwo />
      <main className="main-area fix">
        <DashboardBreadcrumb />
        <DashboardHomeArea />
      </main>
      <FooterOne />
    </>
  )
}

export default DashboardHome
