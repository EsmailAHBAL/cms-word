import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-1 border-accent-1 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center bg-white text-gray-400">
          {preview ? (
            <>
    <div className="flex justify-around items-center">

<Link href={"/"} className="font-extrabold md:p-4 p-2 text-xl md:text-2xl text-black font-serif">Smart Min
 <span className="text-gray-800 pl-1">Car</span> </Link>
  <Link href={"/"} className="text-black"><Image src={'/logo.png'} height={100} width={100} alt='n;o ' priority></Image></Link>
</div>            </>
          ) : (
            <>
            <div className="flex justify-around items-center">

            <Link href={"/"} className="font-extrabold md:p-4 p-2 text-xl md:text-2xl text-black font-serif">Smart Min
             <span className="text-gray-700  pl-1">Car</span> </Link>
              <Link href={"/"} className="text-black"><Image src={'/logo.png'} height={100} width={100} alt='n;o ' priority></Image></Link>
            </div>


              
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
