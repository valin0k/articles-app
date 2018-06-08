import React from 'react'

const Comment = ({comment}) => (
  <li>
    <b>{comment.user}</b>
    <div>{comment.text}</div>
  </li>
)

export default Comment
