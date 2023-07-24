import CatNav from "../components/CateNav"
import Alert from "../components/alert"
import Footer from "../components/footer"
import Meta from "../components/meta"
import preview from "./api/preview"

const Terms = () => {
  return (
   <div className="">
       <Meta />

        <Alert preview={preview} />





     <CatNav />
     <div className="h-[100vh]">Contact</div>
     <div className="">
      <Footer />
     </div>
   </div>
  )
}
export default Terms