import React from 'react'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

const Comment = ({comment}) => (
  <li>
    <b>{comment.user}</b>
    <div>{comment.text}</div>
  </li>
)

export default connect(() => {
  const commentSelector = commentSelectorFactory()
  return (state, props) => ({
    comment: commentSelector(state, props)
  })
})(Comment)
