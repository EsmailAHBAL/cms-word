import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import CatNav from './CateNav'
import SideCat from './SiderCat'
import More from './More'

export default function Layout({ preview, children }) {
 
  return (
    <>
      <Meta />
        <Alert preview={preview} />
      <div className="min-h-screen max-w-7xl mx-auto">
   <CatNav />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
  <div className="">
    <div className="border-2 py-4 border-x-0 border-black border-t-0 my-3 order-last md:order-first">Cars</div>
    <SideCat/>
    </div>
  <main className="  lg:col-span-2 order-first lg:order-none">{children}</main>
  <div className="   order-last lg:order-none pt-4"><More /></div>
</div>
      </div>
      <Footer />
    </>
  )
}
