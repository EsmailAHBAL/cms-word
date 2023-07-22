export default function PostTitle({ children }) {
  return (
    <h1
      className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left hover:underline-offset-1"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
