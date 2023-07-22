import Link from "next/link"
import { FC } from "react"

const ListCars : FC<{name:string,childs:any[] }> = ({name,childs}) => {
  return (
   <details className="group [&_summary::-webkit-details-marker]:hidden">
   <summary
     className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:text-gray-700"
   >
     <span className="text-xl font-extralight"> {name} </span>

     <span
       className="shrink-0 transition duration-300 group-open:-rotate-180"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-5 w-5"
         viewBox="0 0 20 20"
         fill="currentColor"
       >
         <path
           fillRule="evenodd"
           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
           clipRule="evenodd"
         />
       </svg>
     </span>
   </summary>

   <ul className="mt-2 space-y-1 px-4">
   
     {
      childs.map(((c,i)=> (
       <li key={i}>
       <Link
         href={`/categories/${c.node.slug}`}
         className="block rounded-lg px-4 py-2 text-lg  text-gray-800 hover:text-gray-700"
       >
{c.node.name}       </Link>
     </li>
      )))
     }

     
   </ul>
 </details>

  )
} 
export default ListCars