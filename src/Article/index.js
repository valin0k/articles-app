import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loader from '../Loader'

import CommentList from '../CommentList'
import {deleteArticle, loadArticle} from '../AC'

class Article extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate({loadArticle, article}) {
    !article.loading && !article.text && loadArticle(article.id)
  }

  getArticleBody = ({text, comments, id}) => [
    <div key={1}>{text}</div>,
    <CommentList key={2} articleId={id} comments={comments} />
  ]

  handleToggleOpen = e => {
    this.props.toggleOpen(this.props.article.id)
  }

  handleDelete = e => {
    this.props.deleteArticle(this.props.article.id)
  }

  render () {
    const {article, isOpen} = this.props
    if(article.loading) return <Loader/>

    return (
      <li>
        <b>{article.title}</b>
        <button onClick={this.handleToggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
        <button onClick={this.handleDelete}>Delete article</button>
        {isOpen && this.getArticleBody(article)}
      </li>
    )
  }
}

export default connect(null, {deleteArticle, loadArticle})(Article)
