import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
const Feed = () => {
  return (
    <main
      className="mx-auto grid grid-cols-1 
                    md:max-w-3xl md:grid-cols-2 
                    xl:max-w-6xl xl:grid-cols-3"
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="-top-29 fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
