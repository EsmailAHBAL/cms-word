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
     <div className="max-w-7xl mx-auto leading-7 p-4 md:p-1">
<h2 className="text-gray-700 py-3 text-3xl ">About Us!</h2>

    <h3 className="">Welcome To <span id="W_Name1" className="text-gray-800 hover:text-gray-300">smart mini car</span></h3>
    <p><span id="W_Name2">smart mini car</span> is a Professional <span id="W_Type1">
      blog</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated 
      to providing you the best of <span id="W_Type2">blog</span>, with a focus on dependability and <span id="W_Spec">
        auto, cars, news of cars</span>. We're working to turn our passion for <span id="W_Type3">blog</span> into a booming 
        <br></br>
        <a
        className="text-red-600"
        href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow">online website</a>. We hope you enjoy our <span id="W_Type4">blog</span> as much as we enjoy offering them to you.</p>
<p className="py-4">I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
<p className="py-10">Thanks For Visiting Our Site
<span >Have a nice day!</span></p>
     </div>
     <div className="">
      <Footer />
     </div>
   </div>
  )
}
export default About