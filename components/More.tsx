import { useContext } from "react"
import AppContext from "../lib/app.context"
import Link from "next/link"
import Image from "next/image"

const More =() => {
 const {categories : data} = useContext(AppContext)
  return (
   <aside>
    <p className=""></p>
 {
  data.sidePost.map((post:any,i:number )=> (
   
   <div className="w-full grid grid-cols-3 gap-x-3  md: p-2" key={i}>
   <div className="grid-cols-1 relative ">
    {
 post.node.featuredImage ? (
  <Image
height={5000} width={4000}
alt="Office"
src={post.node.featuredImage.node.sourceUrl}
className="aspect-square object-contain h-full w-full  top-0"
/>
 ): (
  <div className="w-full h-full flex items-center justify-center">...</div>
 )
    }
   </div>
   <div className="grid-cols-2 w-full col-span-2">
    <p className="">
    <Link
              href={`/posts/${post.node.slug}`}
              className="hover:text-gray-700 line-clamp-3  text-black font-extralight ease-in-out duration-700 hover:text-sm transition-all "
              dangerouslySetInnerHTML={{ __html: post.node.title }}
            ></Link>   
    </p>
   </div>
  </div>
  ))
 }
   </aside>
  )
}
export default More 