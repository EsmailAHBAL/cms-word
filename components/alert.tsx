import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center bg-white text-gray-400">
          {preview ? (
            <>
              <Link href={"/"} className="text-black">SmartMinCar</Link>
            </>
          ) : (
            <>
                        <Link href={"/"} className="font-extrabold md:p-4 p-2 text-xl md:text-3xl text-black">SmartMinCar</Link>

              
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
