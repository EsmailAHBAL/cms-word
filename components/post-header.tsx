import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    
      <div className="mb-8 md:mb-16 sm:mx-0">
     {
      coverImage ? (
        <CoverImage title={title} coverImage={coverImage} />
      ): <div className="flex justify-center items-center">No Image For This Post</div>
     }
      </div>
      <div className="max-w-2xl mx-auto">
      <div className="hidden md:block md:mb-12">
       
      </div>
        <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
