import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";

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
      <div className="md:hidden">
        {coverImage ? (
          <Link href={`/posts/${slug}`}>
            <Image
              height={5990}
              width={4000}
              alt="Office"
              src={coverImage.node.sourceUrl}
              className="h-56 w-full object-contain"
            />
          </Link>
        ) : (
          <div className="h-56 w-full  flex justify-center items-center  bg-gray-50">
            ....
          </div>
        )}
      </div>
      <div className="flex md:h-52">
        <div className=" md:hidden rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>
              {" "}
              <Date dateString={date} />
            </span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>.</span>
          </time>
        </div>

        <div className="hidden md:block sm:basis-56">
          {coverImage ? (
            <Link href={`/posts/${slug}`}>
              <Image
                height={5000}
                width={4000}
                alt="Office"
                src={coverImage.node.sourceUrl}
                className="aspect-square object-contain h-48 w-full "
              />
            </Link>
          ) : (
            <div className="h-56 w-full  flex justify-center items-center  bg-gray-50">
              ....
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6  md:h-[30vh]">
            <h3 className="font-bold uppercase text-gray-900">
              <Link
                href={`/posts/${slug}`}
                className="text-black font-bold ease-in-out 
              duration-1000 transition line-clamp-3 hover:line-clamp-none  hover:text-gray-200"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>{" "}
            </h3>

            <div
              className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
