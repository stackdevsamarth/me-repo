import Cart from "@/components/inner-shop/cart";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Cart | Metaedschool",
};
const page = () => {
   return (
      <Wrapper>
         <Cart />
      </Wrapper>
   )
}

export default page