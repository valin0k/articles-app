import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Loader from '../Loader'
import {loadArticleComments} from '../AC'
import Comment from '../Comment'
import CommentForm from '../CommentForm'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array
  }

  state = {
    isOpen: false
  }

  componentDidUpdate() {
    const {loaded, loading, articleId, loadArticleComments} = this.props
    !loading && !loaded && this.state.isOpen && loadArticleComments(articleId)
  }

  handleToggleComments = e => this.setState({isOpen: !this.state.isOpen})

  render() {
    const {comments, articleId, loading, loaded} = this.props
    const {isOpen} = this.state
    if(loading) return <Loader/>
    if(!comments) return 'No comments yet'

    return(
      <Fragment>
        <button onClick={this.handleToggleComments}>
          {isOpen ? 'Close' : 'Open'} comments
        </button>
        <ul>
          {isOpen && loaded && comments.map(id => (
            <Comment id={id} key={id} />
          ))}
          {isOpen && <CommentForm articleId={articleId} />}
        </ul>
      </Fragment>
    )
  }
}

export default connect((state, props) => ({
  loaded: state.comments.loaded.includes(props.articleId),
  loading: state.comments.loading
}), {loadArticleComments})(CommentList)
