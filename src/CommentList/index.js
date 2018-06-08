import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment'
import CommentForm from '../CommentForm'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array
  }

  state = {
    isOpen: false
  }

  handleToggleComments = e => this.setState({isOpen: !this.state.isOpen})

  render() {
    const {comments} = this.props
    const {isOpen} = this.state
    if(!comments) return 'No comments yet'
    return(
      <Fragment>
        <button onClick={this.handleToggleComments}>
          {isOpen ? 'Close' : 'Open'} comments
        </button>
        <ul>
          {isOpen && comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
          {isOpen && <CommentForm />}
        </ul>
      </Fragment>
    )
  }
}

export default CommentList
