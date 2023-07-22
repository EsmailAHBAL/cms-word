import { useContext } from "react"
import AppContext from "../lib/app.context"
import Link from "next/link"
import ListCars from "./listcars"

const SideCat = () => {
 const {categories : data } = useContext(AppContext)

 const categories = data.cars

  return (
   <div className="">
{
 categories.map((c1:any,i:number) => (
  <div className=""  key={i}>
   {
c1.children.edges.map((c2:any,ii:number)=> (
 <div className="border-gray-100 border-2 border-x-0 border-t-0  " key={ii}>
{
  c2.node.children.edges.length  ? (<ListCars name={c2.node.name} childs ={c2.node.children.edges}></ListCars>):(
   <div className="pl-3 text-black py-2 text-xl  font-extralight flex justify-between items-center">   <Link
   className="text-black"
   href={`/categories/${c2.node.slug}`}>
   {c2.node.name}
 </Link>
 <div className="text-2xl  font-extrabold pr-5">.</div>
 </div>
  )

}    
 </div>
))    
   }
  </div>
 ))
}
   </div>
   
  )
}
export default SideCat