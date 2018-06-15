import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {loadAllArticles} from '../../AC/index'
import {articlesSelector} from '../../selectors/index'
import accordion from '../../decorators/accordion'
import Loader from '../Loader/index'

const activeStyle = {backgroundColor: '#c0ccff'}

class ArticleList extends Component {
  static propTypes = {
    // HOC
    openItemId: PropTypes.string,
    handleToggleItem: PropTypes.func
  }

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props
    !loading && !loaded && loadAllArticles()
  }

  render () {
    const {articles, loading} = this.props
    if(loading) return <Loader />
    return (
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <NavLink to={`/articles/${article.id}`} activeStyle={activeStyle}>
              {article.title}
            </NavLink>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect((state) => ({
  articles: articlesSelector(state),
  loaded: state.articles.loaded,
  loading: state.articles.loading
}), {loadAllArticles})(accordion(ArticleList))
