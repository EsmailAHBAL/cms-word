import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline text-sm">
   <Image 
   src="/house.png"
   height={20}
   width={20}
   alt='hello'
   priority
   />
      </Link>
      
    </h2>
  )
}
