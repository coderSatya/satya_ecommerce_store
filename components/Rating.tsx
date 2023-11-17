import React from 'react'
import {AiFillStar} from 'react-icons/ai'
interface Star{
    star:number
}

const Rating = ({star}:Star) => {
    const stars=[]
    for (let i = 0; i <=star ; i++) {
        
        stars.push(
          <span><AiFillStar /></span>
        );
      }
  return (
    <div className='flex gap-x-1 text-yellow-400'>
     {stars}
    </div>
  )
}

export default Rating
