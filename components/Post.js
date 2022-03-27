import { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center justify-center">
          <img
            src={userImg}
            alt=""
            className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          />
          <p className="font-bold">{username}</p>
        </div>
        <DotsHorizontalIcon className="w-5" />
      </div>

      {/* post image  */}
      <div>
        <img src={img} alt="" className="w-full object-contain" />
      </div>

      {/* button like section  */}
      <div className="flex justify-between  px-5 py-3">
        <div className="flex items-center space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn h-5 w-5 rotate-45 " />
        </div>
        <div>
          <BookmarkIcon className="btn" />
        </div>
      </div>

      {/* caption */}
      <p className="truncate px-5 py-2">
        <span className="pr-3 font-bold">{username}</span>
        {caption}
      </p>

      {/* comment */}
      <form action="" className="flex items-center p-4">
        <InputEmoji
          type="text"
          cleanOnEnter
          className="flex-1 flex-row-reverse border-none outline-none focus:ring-0 "
          placeholder="Add a comment ...."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
