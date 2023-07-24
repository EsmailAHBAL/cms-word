import { useContext, useState } from "react"
import AppContext from "../lib/app.context"
import Link from "next/link"
import NavLg from "./NavLg"
import NavSm from "./NavSm"
type cateType = {
  node:{name:string,slug:string,children:{ edges: any []}
}
}
const CatNav = () => {
 const {categories : data}  :  any= useContext(AppContext)
 const categories = data.all

    const [showMenu, setShowMenu] = useState(false);
    return (
      <>
        <div className="lg:hidden w-full  bg-white border-black border-2 py-4 border-x-0 border-t-0">
          <div className="flex justify-between p-3 pt-4 items-center">
            <Link className="font-black text-black font-mono" href="/">SmartMinCar</Link>
            <div className="Logo" onClick={() => setShowMenu(!showMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
          <ul className={`${showMenu ? 'w-full  z-10 ease-in-out duration-1000 transition-all' : 'hidden ease-out'}`}>
          <NavSm categories={categories}></NavSm>

          </ul>
        </div>
        <div className=" justify-center items-center text-xs hidden lg:flex">
        <NavLg categories={categories}></NavLg>
        </div>
      </>
    );
    
}
export default CatNav