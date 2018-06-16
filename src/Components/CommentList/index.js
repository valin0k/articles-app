import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Loader from '../Loader/index'
import {loadArticleComments, loadComments} from '../../AC/index'
import Comment from '../Comment/index'
import CommentForm from '../CommentForm/index'
import {getPagination} from '../../helpers'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

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

  getArticleComments = ({id, isOpen, loaded, articleId, comments, language}) => {
    if(!comments) return null

    return (
      <Fragment>
        <button onClick={this.handleToggleComments}>
          {isOpen ? language.close : language.open} {language.comments}
        </button>
        <ul className='commentList'>
          {!comments.length && isOpen
            ? <div>{language.noComments}</div>
            : isOpen && loaded && comments.map(id => <Comment id={id} key={id} />)
          }
          {isOpen && <CommentForm articleId={articleId} />}
        </ul>
      </Fragment>
    )
  }

  getComments = ({loaded, pages, page}) => {
    if(!pages[page]) return null

    const commentsIds = pages[page]
    return (
      <ul className='commentList'>
        {commentsIds.map(id => (
          <Comment id={id} key={id} />
        ))}
      </ul>
    )
  }

  render() {
    const {articleId, loading} = this.props

    if(loading) return <Loader/>

    return(
      <LangConsumer>
        {(context) => (
          <Fragment>
            {articleId
              ? this.getArticleComments({...this.state, ...this.props, ...context})
              : this.getComments({...this.props, ...context})}
          </Fragment>
        )}
      </LangConsumer>
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
