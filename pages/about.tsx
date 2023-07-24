import CatNav from "../components/CateNav"
import Alert from "../components/alert"
import Footer from "../components/footer"
import Meta from "../components/meta"
import preview from "./api/preview"

const About = () => {
  return (
   <div className="">
       <Meta />
        <Alert preview={preview} />
     <CatNav />
     <div className="h-[100vh]">
      About Page 
     </div>
     <div className="">
      <Footer />
     </div>
   </div>
  )
}
export default About