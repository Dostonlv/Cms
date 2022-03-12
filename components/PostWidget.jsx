import React, {useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimmilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug){
      getSimmilarPosts(categories, slug)
      .then(res=>setRelatedPosts(res))
    }else{
      getRecentPosts()
      .then(res => setRelatedPosts(res))
    }
  }, [slug])
  console.log(relatedPosts);
  return (
    <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
     <h3 className='text-xl mb-8 font-semibold border-b pb-4'> 
       {slug ? 'Related Posts' : 'Recent Posts'}
     </h3>
     {relatedPosts.map(post  => (
     <div key={post.title} className=' flex items-center w-full mb-4'>
       <div className='w-16 flex-none'>
         <img
          src={post.featuredImage.url} 
          alt={post.title}
          width='60px'
          height='60px'
          className='align-middle rounded-full'
           />
         </div>
       </div>  
     ))}
      </div>
  )
};

export default PostWidget