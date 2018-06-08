import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from '../Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  static propTypes = {
    // HOC
    openItemId: PropTypes.string,
    handleToggleItem: PropTypes.func
  }

  render() {
    const {articles} = this.props
    const {openItemId, handleToggleItem} = this.props
    return(
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

const filtrateArticles = (articles, filters) => {
  const {select, dateRange} = filters
  return articles.filter(article => (
    (!select.length || select.some(selected => selected.value === article.id))
    && (!dateRange.from || Date.parse(article.date) > Date.parse(dateRange.from))
    && (!dateRange.to || Date.parse(article.date) < Date.parse(dateRange.to))
  ))
}

export default connect(({articles, filters}) => ({
  articles: filtrateArticles(articles, filters)
}))(accordion(ArticleList))
