import React from 'react'
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
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
