import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
  <article className=" bg-white transition hover:shadow-sm mt-5 border-4 border-x-0 border-gray-200 border-t-0 pb-4">
    <div className="lg:hidden">
      {coverImage ? (

        <Image
        height={5990} width={4000}
        alt="Office"
        src={coverImage.node.sourceUrl}
        className="h-56 w-full object-contain"
        />
        ) : <div className="h-56 w-full  flex justify-center items-center  bg-gray-50">....</div>}
    </div>
    <div className="flex">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      dateTime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>            <Date dateString={date} />
</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>.</span>
    </time>
  </div>

  <div className="hidden lg:block sm:basis-56">
    
      {coverImage ? (

<Image
height={5000} width={4000}
alt="Office"
src={coverImage.node.sourceUrl}
className="aspect-square object-contain h-48 w-full "
/>
) : <div className="h-56 w-full  flex justify-center items-center  bg-gray-50">....</div>}
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6  md:h-[30vh]">
        <h3 className="font-bold uppercase text-gray-900">
        <Link
              href={`/posts/${slug}`}
              className="hover:text-gray-800 text-black font-bold ease-in-out 
              duration-1000 transition line-clamp-3 hover:line-clamp-none  hover:text-sm"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>        </h3>
      

      <div
            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />

      
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <Link
   href={`/posts/${slug}`}        className="block rounded-sm  border-2 border-black 
         px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-black hover:text-white ease-in-out "
      >
        Read Blog
      </Link>
    </div>
  </div></div>
</article>
  )
}
