import React from 'react'
import  "../style/home.scss"
import Post from '../../../componnet/Post'
const Home = () => {
  

  return (
    <div className='mainpage'>
      <div className="feed">
        <div className="posts">
         <Post/>
        </div>
      </div>
    </div>
  )
}

export default Home