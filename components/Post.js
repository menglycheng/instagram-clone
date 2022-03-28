import { useEffect, useState } from 'react'
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
import { async } from '@firebase/util'
import Moment from 'react-moment'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'
const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHadLiked] = useState(false)
  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs)
      }
    )
  }, [db])
  useEffect(() => {
    return onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
      setLikes(snapshot.docs)
    })
  }, [db, id])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  useEffect(() => {
    setHadLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    )
  }, [likes])
  const sendComment = async (e) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }
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
          {hasLiked ? (
            <HeartIconFilled className="btn text-red-500" onClick={likePost} />
          ) : (
            <HeartIcon className="btn" onClick={likePost} />
          )}
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn h-5 w-5 rotate-45 " />
        </div>
        <div>
          <BookmarkIcon className="btn" />
        </div>
      </div>

      {/* caption */}
      <p className="truncate px-5 py-2">
        {likes.length > 0 && <p className="font-bold">{likes.length} likes</p>}
        <span className="pr-3 font-bold">{username}</span>
        {caption}
      </p>

      {/* comment */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 rounded-full"
              />
              <p className="flex-1 text-sm ">
                {' '}
                <span className="font-bold">
                  {comment.data().username}
                </span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form action="" className="flex items-center p-4">
          <InputEmoji
            type="text"
            cleanOnEnter
            value={comment}
            onChange={setComment}
            className="flex-1 flex-row-reverse border-none outline-none focus:ring-0 "
            placeholder="Add a comment ..."
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
