import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {articles} from '../sampleArticles'
import Article from '../Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  static propTypes = {
    // HOC
    openItemId: PropTypes.string,
    handleToggleItem: PropTypes.func
  }

  render() {
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

export default accordion(ArticleList)
