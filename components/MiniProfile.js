import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const MiniProfile = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="mt-14 ml-10 flex items-center justify-between p-2">
      <img
        src={session?.user?.image}
        className=" h-16 w-16 rounded-full p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400" onClick={signOut}>
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
