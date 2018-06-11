import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../Article'
import {loadAllArticles} from '../AC'
import {articlesSelector} from '../selectors'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  static propTypes = {
    // HOC
    openItemId: PropTypes.string,
    handleToggleItem: PropTypes.func
  }

  componentDidMount() {
    this.props.loadAllArticles()
  }

  render () {
    const {articles} = this.props
    const {openItemId, handleToggleItem} = this.props
    return (
      <ul>
        {articles.map(article => (
          <Article
            article={article}
            isOpen={article.id === openItemId}
            toggleOpen={handleToggleItem}
            key={article.id} />
        ))}
      </ul>
    )
  }
}

export default connect((state) => ({
  articles: articlesSelector(state)
}), {loadAllArticles})(accordion(ArticleList))
