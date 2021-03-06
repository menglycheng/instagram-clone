import Image from 'next/image'
import Logo from '../src/images/Instagram_logo.png'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Header = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()
  console.log(open)
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* logo */}
        <div
          className="relative w-24 cursor-pointer "
          onClick={() => router.push('/')}
        >
          <Image src={Logo} layout="fill" objectFit="contain" />
        </div>

        {/* search bar  */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3 ">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="block w-full rounded-md border-gray-300 bg-gray-50  pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>
        <div className=" flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push('/')} />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn h-5 w-5 rotate-45 " />
                <div className="absolute -top-2 -right-3 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(!open)}
                className="navBtn "
              />
              <UserGroupIcon className="navBtn " />
              <HeartIcon className="navBtn " />
              <MenuIcon className="h-6 cursor-pointer md:hidden" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                className="h-10 w-10 cursor-pointer rounded-full"
              />{' '}
            </>
          ) : (
            <div>
              <button onClick={signIn}>Sigin </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
