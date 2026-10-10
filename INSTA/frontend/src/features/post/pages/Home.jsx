import React from 'react'
import  "../style/home.scss"
const Home = () => {
  
  return (
    <div className='mainpage'>
      <div className="feed">
        <div className="posts">
          <div className="post">
          <div className="profile">
            <div className="img-wrapper">
            <img className='proImg' src="https://images.pexels.com/photos/39886254/pexels-photo-39886254.png" alt="" />
            </div>
            <p>testuser1</p></div>
          
            <img className='postImg' src="https://images.pexels.com/photos/39925383/pexels-photo-39925383.jpeg" alt="" />
        
          <div className="caption">
            <p>This is the test caption1</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home