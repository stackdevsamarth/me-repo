import BrandOne from "@/components/common/brands/BrandOne"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import About from "./About"
import Banner from "./Banner"
import Blog from "./Blog"
import Categories from "./Categories"
import Counter from "./Counter"
import CourseArea from "./CourseArea"
import FaqArea from "./FaqArea"
import Features from "./Features"
import Instructor from "./Instructor"
import InstructorTwo from "./InstructorTwo"
import Newsletter from "./Newsletter"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <Banner />
            <Categories />
            <BrandOne />
            <About />
            <CourseArea />
            <Newsletter />
            <Instructor />
            <Counter />
            <FaqArea />
            <Features />
            <InstructorTwo />
            <Blog />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
