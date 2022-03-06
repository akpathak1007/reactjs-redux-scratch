import React from 'react';

const Post = ({post}) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  )
}

export default Post;