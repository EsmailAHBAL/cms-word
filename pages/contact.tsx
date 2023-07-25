import CatNav from "../components/CateNav"
import Alert from "../components/alert"
import Footer from "../components/footer"
import Meta from "../components/meta"
import preview from "./api/preview"

const Terms = () => {
  return (
   <div className="">
    <Alert preview={preview}/>
       <Meta />






     <CatNav />
     <div className="max-w-7xl mx-auto"> <div className="container mx-auto px-4 py-4">
      <div className="text-center"><p className=""><span className="text-red-500 px-4 ">Our Email </span>myEmail@gmail.com</p></div>
      <p className="my-4 text-center">Or</p>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-gray-600 mb-16">Feel free to get in touch with us for any inquiries or feedback.</p>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
            <form>
         
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
                <textarea id="message" name="message"  className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <button type="submit" className="bg-black hover:black text-white font-bold py-2 px-4 rounded-md transition-all duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
</div>
     <div className="">
      <Footer />
     </div>
   </div>
  )
}
export default Terms