import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Loader from '../Loader'
import {loadArticleComments, loadComments} from '../AC'
import Comment from '../Comment'
import CommentForm from '../CommentForm'
import {getPagination} from '../helpers'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array
  }

  state = {
    isOpen: false
  }

  componentDidUpdate() {
    const {loaded, loading, articleId, loadArticleComments, page, pages, loadComments} = this.props
    if(articleId) {
      !loading && !loaded && this.state.isOpen && loadArticleComments(articleId)
    } else {
      !loading && (pages && !pages[page]) && loadComments(getPagination(page))
    }
  }

  componentDidMount() {
    const {loading, loadComments, page, pages} = this.props
    if((!pages || !pages[page]) && !loading) {
      loadComments(getPagination(page))
    }
  }

  handleToggleComments = e => this.setState({isOpen: !this.state.isOpen})

  getArticleComments = ({id, isOpen, loaded, articleId, comments}) => {
    if(!comments) return 'No comments yet'

    return (
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

  getComments = ({loaded, pages, page}) => {
    if(!pages[page]) return null

    const commentsIds = pages[page]
    return (
      <ul>
        {commentsIds.map(id => (
          <Comment id={id} key={id} />
        ))}
      </ul>
    )
  }

  render() {
    const {comments, articleId, loading, loaded} = this.props

    if(loading) return <Loader/>

    return(
      <Fragment>
        {articleId
          ? this.getArticleComments({...this.state, ...this.props})
          : this.getComments(this.props)}
      </Fragment>
    )
  }
}

export default connect((state, props) => {
  return props.articleId
    ? {
      loaded: state.articles.entities.get(props.articleId).loadedComments,
      loading: state.articles.entities.get(props.articleId).loadingComments}
    : {
      loading: state.comments.loading,
      pages: state.comments.pagination}
}, {loadArticleComments, loadComments})(CommentList)
