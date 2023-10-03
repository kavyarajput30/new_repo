import React from 'react'
import './media_Post.css'
const Media_Post = (props) => {
  return (
    <div>
       <div className="main_MP">
              <img src={props.logo} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
       </div>
      
    </div>
  )
}

export default Media_Post
