import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentWishlistArea from './StudentWishlistArea'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentWishlist = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentWishlistArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentWishlist
