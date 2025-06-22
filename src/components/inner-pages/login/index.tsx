import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import LoginArea from "./LoginArea"

const Login = () => {
   
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <BreadcrumbOne title="Student Login" sub_title="Login" />
            <LoginArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Login

