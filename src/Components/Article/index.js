import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loader from '../Loader/index'
import {Consumer as LangConsumer} from '../../LocalizationContext'

import CommentList from '../CommentList/index'
import {deleteArticle, loadArticle} from '../../AC/index'

class Article extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    id: PropTypes.string
  }

  componentDidMount() {
    const {article, loadArticle, id} = this.props
    if(!article || (!article.loading && !article.text)) {
      loadArticle(id)
    }
  }

  getArticleBody = ({text, comments}) => [
    <div key={1}>{text}</div>,
    <CommentList key={2} articleId={this.props.id} comments={comments} />
  ]

  handleDelete = e => {
    this.props.deleteArticle(this.props.article.id)
  }

  render () {
    const {article, isOpen} = this.props
    if(!article) return null
    if(article.loading) return <Loader/>

    return (
      <li>
        <b>{article.title}</b>
        <LangConsumer>
          {({language}) => <button onClick={this.handleDelete}>{language.deleteArticle}</button>}
        </LangConsumer>
        {isOpen && this.getArticleBody(article)}
      </li>
    )
  }
}

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article)
