import DashboardBreadcrumb from '@/components/common/breadcrumb/DashboardBreadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentReviewArea from './StudentReviewArea'
import HeaderThree from '@/layouts/headers/HeaderThree'
import HeaderTwo from '@/layouts/headers/HeaderTwo'

const StudentReview = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <DashboardBreadcrumb />
            <StudentReviewArea />
         </main>
         <FooterOne />
      </>
   )
}

export default StudentReview
