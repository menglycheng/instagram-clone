import React from 'react'

const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU"
        className=" h-16 w-16 rounded-full p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">menglycheng</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
