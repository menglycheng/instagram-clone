import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

const DUMMY_DATA = [
  {
    id: '123',
    username: 'menglycheng',
    userImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU',
    img: 'https://img.freepik.com/free-psd/social-media-instagram-post-template_47618-73.jpg',
    caption: 'Check out my first post XD ',
  },
  {
    id: '133',
    username: 'menglycheng',
    userImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU',
    img: 'https://img.freepik.com/free-psd/social-media-instagram-post-template_47618-73.jpg',
    caption: 'Check out my first post XD ',
  },
]

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    return onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    console.log(posts)
  }, [db])
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
