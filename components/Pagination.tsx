function Pagination({ getCurrentPage, nPage, number }: { getCurrentPage: (n: number) => void, nPage: number, number }) {
  const TAB = new Array(Math.ceil(nPage / number)).fill(0)
  if (!TAB.length) return <div className=""></div>
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">


      {
        TAB.map((i, ii) => (
          <li key={ii}>
            <p
              onClick={() => {
                window.scroll(0, 320)
                getCurrentPage(ii + 1)
              }}

              className="block h-8 w-8 rounded border border-lg text-lg
     hover:bg-black hover:text-white 
     bg-white text-center leading-8 text-gray-900 border-black"
            >
              {ii + 1}
            </p>
          </li>
        ))
      }

    </ol>
  )
}
export default Pagination 
