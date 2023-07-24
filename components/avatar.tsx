
export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-1 rounded-full bg-gray-100 flex justify-center items-center ">
      🖊
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
