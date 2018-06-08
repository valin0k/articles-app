import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'

class Article extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  getArticleBody = ({text, comments}) => [
    <div key={1}>{text}</div>,
    <CommentList key={2} comments={comments} />
  ]

  handleArticleClick = e => {
    this.props.toggleOpen(this.props.article.id)
  }

  render() {
    const {article, isOpen} = this.props
    return(
      <li>
        <b>{article.title}</b>
        <button onClick={this.handleArticleClick}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen && this.getArticleBody(article)}
      </li>
    )
  }
}

export default Article
