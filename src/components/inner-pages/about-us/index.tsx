import BrandOne from "@/components/common/brands/BrandOne"
import Features from "@/components/homes/home-one/Features"
import Feature from "@/components/homes/home-two/Feature"
import Newsletter from "@/components/homes/home-two/Newsletter"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import About from "./About"
import Testimonial from "./Testimonial"

const AboutUs = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Who We Are" sub_title="About Us" /> */}
            <About />
            {/* <BrandOne /> */}
            <Feature style={true} />
            <Newsletter />
            <Features />
            <Testimonial />
         </main>
         <FooterOne />
      </>
   )
}

export default AboutUs
