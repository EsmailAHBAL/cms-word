import CatNav from "../components/CateNav"
import TermsBody from "../components/TermsBody"
import Alert from "../components/alert"
import Footer from "../components/footer"
import Meta from "../components/meta"
import preview from "./api/preview"

const Terms = () => {
  return (
   <div className="">
            <Alert preview={preview} />

    <Meta />
     <CatNav />
     <div className="max-w-7xl mx-auto leading-7 p-4 md:p-1">
      <TermsBody />
      
     </div>
     <div className="">
      <Footer />
     </div>
   </div>
  )
}
export default Terms