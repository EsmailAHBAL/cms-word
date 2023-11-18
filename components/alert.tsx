import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Russo_One } from 'next/font/google'
const font = Russo_One({
  subsets: ['latin-ext'], weight: "400"
})

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-1 border-accent-1 text-white': preview,
        'bg-accent-1 border-accent-2 text-red-50': !preview,
      })}
    >
      <Container>
        <section className={font.className}>

          <div className="py-2 text-center bg-white text-gray-400">
            {preview ? (
              <>
                <div className="flex justify-around items-center px-2">


                  <Link href={"/"} className="font-extrabold md:p-4 text-mg md:text-lg text-black">Smart Mini
                    <span className="text-gray-800 pl-1">Car</span> </Link>
                  <Link href={"/"} className="text-black"><Image src={'/logo.png'} height={40} width={40} alt='n;o ' priority></Image></Link>
                </div>            </>
            ) : (
              <>
                <div className="flex justify-between px-6 items-center">


                  <Link href={"/"} className="font-extrabold md:p-4  text-md md:text-2xl text-black ">Smart Mini
                    <span className="text-gray-900  pl-1">Car</span> </Link>
                  <Link href={"/"} className="text-black lg:pl-5"><Image src={'/logo.png'} height={40} width={40} alt='n;o
              
              '
                    className="object-cover object-center w-full h-full"
                    priority></Image></Link>
                </div>



              </>
            )}
          </div>
        </section>
      </Container>
    </div>
  )
}
