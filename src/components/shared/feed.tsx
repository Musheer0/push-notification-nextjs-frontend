import React from 'react'
import Post from './post'
import { PostWithUser } from '@/app/feed/page'

const Feed = ({posts}:{posts:PostWithUser[]}) => {
  return (
    <div className='w-full max-w-xl mx-auto flex flex-col gap-2 pt-2'>
      {posts.map((post,i)=>{
      return  <Post key={i} post={post}/>
      })}
    </div>
  )
}

export default Feed