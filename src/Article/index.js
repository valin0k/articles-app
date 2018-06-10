import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentList from '../CommentList'
import {deleteArticle} from '../AC'

class Article extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  getArticleBody = ({text, comments}) => [
    <div key={1}>{text}</div>,
    <CommentList key={2} comments={comments} />
  ]

  handleToggleOpen = e => {
    this.props.toggleOpen(this.props.article.id)
  }

  handleDelete = () => {
    this.props.deleteArticle(this.props.article.id)
  }

  render () {
    const {article, isOpen} = this.props
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

export default connect(null, {deleteArticle})(Article)
