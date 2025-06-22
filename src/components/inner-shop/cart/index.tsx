import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import dynamic from "next/dynamic";
const CartArea = dynamic(() => import("./CartArea"), { ssr: true });

const Cart = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <BreadcrumbOne title="Cart" sub_title="Cart" />
            <CartArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Cart
