import Link from "next/link"
import { FC, useState } from "react"

const NavSm:FC<{categories:any}> =({categories}) => {
 const getAllCategories = categories[0].children.edges
 const [isOpen,setOpen] = useState(false)
  return (
   <div className="md:flex ">

    {
     getAllCategories.map((c : any,i:number)=> (
       <div className="p-3" key={i}>
     {
      c.node.children.edges.length ? (
       <details className="group">
       <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> {c.node.name}</span>
        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
                 </span>
       </summary>
        {
         c.node.children.edges.map((c2:any,ii:number)=> <div className="navbar-item" key={ii}>
         {c2.node.children.edges.length ? (
          <details className="group group-last:" >
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
           <span>  <Link className="navbar-item p-4" href={`/categories/${c2.node.slug}`}>
                        {c2.node.name}
                      </Link></span>
           <span className="transition  group-even:rotate-90 hover:text-5xl">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
      </svg>
                    </span>
          </summary>
          {
           c2.node.children.edges.map((c3:any,i3:number)=> (
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn" key={i3}>
          <Link className="text-black text-sm pl-5" href={`/categories/${c3.node.slug}`}>
                        {c3.node.name}
                      </Link>
            </p>
           ))
          }
         
         </details>
         ) :  <Link className="navbar-item" href={`/categories/${c2.node.slug}`}>
         {c2.node.name}
       </Link>}
       </div>)
        }
      </details>
      ) :<Link className="navbar-item" href={`/categories/${c.node.slug}`}>
      {c.node.name}
    </Link>
     }
       </div>
     
     ))
    }
    </div>
  
   
   )
  }
 export default NavSm