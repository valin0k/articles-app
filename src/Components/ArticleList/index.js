import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {loadAllArticles} from '../../AC/index'
import {articlesSelector} from '../../selectors/index'
import Loader from '../Loader/index'

import './style.css'

class ArticleList extends Component {
  static propTypes = {
    // connect
    loadAllArticles: PropTypes.func,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    articles: PropTypes.array
  }

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props
    !loading && !loaded && loadAllArticles()
  }

  render () {
    const {articles, loading} = this.props
    if(loading) return <Loader />
    return (
      <ul className='articlesList'>
        {articles.map(article => (
          <li key={article.id}>
            <NavLink to={`/articles/${article.id}`} activeClassName='active'>
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
}), {loadAllArticles})(ArticleList)
