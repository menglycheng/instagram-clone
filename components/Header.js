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

const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>

    <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
      {/* logo */}
      <div className="relative w-24 cursor-pointer ">
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

      {/* profile */}
      <div className=" flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn" />
        <div className="navBtn relative">
          <PaperAirplaneIcon className="navBtn h-5 w-5 rotate-45 " />
          <div className="absolute -top-2 -right-3 flex h-5 w-5 animate-pulse items-center justify-center text-white rounded-full bg-red-500 text-xs">
            3
          </div>
        </div>
        <PlusCircleIcon className="navBtn " />
        <UserGroupIcon className="navBtn " />
        <HeartIcon className="navBtn " />
        <MenuIcon className="h-6 cursor-pointer md:hidden" />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU"
          className="h-10 w-10 cursor-pointer rounded-full"
        />
      </div>
    </div>
    </div>
  )
}

export default Header
