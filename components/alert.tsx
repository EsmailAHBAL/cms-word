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
                <div className="flex justify-around items-center">

                  <Link href={"/"} className="font-extrabold md:p-4 p-2 text-xl md:text-lg text-black">Smart Mini
                    <span className="text-gray-800 pl-1">Car</span> </Link>
                  <Link href={"/"} className="text-black"><Image src={'/logo.png'} height={80} width={80} alt='n;o ' priority></Image></Link>
                </div>            </>
            ) : (
              <>
                <div className="flex justify-around items-center">

                  <Link href={"/"} className="font-extrabold md:p-4 p-2 text-xl md:text-2xl text-black ">Smart Mini
                    <span className="text-gray-900  pl-1">Car</span> </Link>
                  <Link href={"/"} className="text-black"><Image src={'/logo.png'} height={100} width={100} alt='n;o
              
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
