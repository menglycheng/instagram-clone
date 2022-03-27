import React from 'react'

const Story = ({ image, username }) => {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="p-{1.5px} h-14 w-14 hover:scale-110 transition transform duration-200   ease-out cursor-pointer rounded-full border-2 border-red-500 object-contain"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
