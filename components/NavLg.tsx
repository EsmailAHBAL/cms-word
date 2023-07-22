import Link from "next/link"
import { FC } from "react"

const NavLg:FC<{categories:any}> =({categories}) => {
 const getAllCategories = categories[0].children.edges
  return (
   <div className="md:flex ">

    {
     getAllCategories.map((c : any,i:number)=> (
       <div className="" key={i}>
     {
      c.node.children.edges.length ? (
       <div className="navbar-item has-dropdown is-hoverable" >
       <a className="navbar-link" >
       {c.node.name}
     </a>
     <div className="navbar-dropdown grid-cols-1" >
        {
         c.node.children.edges.map((c2:any,i2:number)=> 

         {
          return c2.node.children.edges? (
           <div className="navbar-item" key={i2}>
             {c2.node.children.edges.length ? (
              <details className="group" key={i2}>
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
               <span>  <Link className="navbar-item" href={`/categories/${c2.node.slug}`}>
                            {c2.node.name}
                          </Link></span>
               <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
                        </span>
              </summary>
              {
               c2.node.children.edges.map((c3:any,i3:number)=> (
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn" key={i3}>
              <Link className="navbar-item" href={`/categories/${c3.node.slug}`}>
                            {c3.node.name}
                          </Link>
                </p>
               ))
              }
             
             </details>
             ) :  <Link className="navbar-item" href={`/categories/${c2.node.slug}`}>
             {c2.node.name}
           </Link>}
           </div>
          ) : null
         }
         
         )
        }
        </div>
     </div>
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
 export default NavLg