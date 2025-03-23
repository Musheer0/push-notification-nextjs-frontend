import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ForwardIcon, HeartIcon } from 'lucide-react'
import { PostWithUser } from '@/app/feed/page'

const Post = ({post}:{post:PostWithUser}) => {
  return (
  <Card>
    <CardContent>
 <div className="header flex items-center gap-2">
 <img src={post.profilePicture} alt="profile" className='w-10 h-10 rounded-full bg-gradient-to-b from-gray-700 to-gray-900' />
<div className="meta-post-info border-l pl-2">
  <p className='text-sm font-semibold'>{post.username}</p>
  <p className='text-xs text-muted-foreground'>{post.email}</p>
</div>
 </div>
 <div className="body py-2">
  <p className='font-semibold text-lg'>{post.title}</p>
  <p className=''>{post.body}</p>
 </div>
 <div className="footer border-t pt-2">
  <div className="post-activity flex items-center justify-between">
    <div className="actions">
      <Button size={'icon'} variant={'ghost'} className='cursor-pointer'>
        <HeartIcon/>
      </Button>
      <Button size={'icon'} variant={'ghost'} className='cursor-pointer'>
        <ForwardIcon/>
      </Button>
    </div>
  </div>
 </div>
    </CardContent>
  </Card>
  )
}

export default Post