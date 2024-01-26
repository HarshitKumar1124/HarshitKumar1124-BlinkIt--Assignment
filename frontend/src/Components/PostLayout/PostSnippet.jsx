import React from 'react'
import Icon from "../../Assets/popular-post-1.jpg"
import "./PostLayout.scss"

const PostSnippet = ({created,heading}) => {
  return (
    <div className='post_snippet_container'>
        <img src={Icon}/>
        <div>
            <h4>{heading}</h4>
            <p>posted on {created}</p>
        </div>
    </div>
  )
}

export default PostSnippet