import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class Articles extends Component{
  getIndex = (route) => {
    return <h3>Select article</h3>
  }

  getArticle = ({match}) => {
    const {id} = match.params

    return <Article id={id} key={id} isOpen />
  }

  render() {
    return (
      <Fragment>
        <ArticleList />
        <Route path='/articles' render={this.getIndex} exact />
        <Route path='/articles/:id' render={this.getArticle} />
      </Fragment>

    )
  }
}

export default Articles
