import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Filters from './Filters'

class App extends Component {
  static propTypes = {

  }

  render() {
    return(
      <Fragment>
        <Filters />
        <ArticleList />
      </Fragment>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
