import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func
  }

  getArticleBody = () => (
    <div>{this.props.article.text}</div>
  )

  handleArticleClick = e => {
    this.props.toggleOpen(this.props.article.id)
  }

  render() {
    const {article, isOpen} = this.props
    return(
      <li>
        <b>{article.title}</b>
        <button onClick={this.handleArticleClick}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen && this.getArticleBody()}
      </li>
    )
  }
}

export default Article
