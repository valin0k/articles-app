import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'

class App extends Component {
  static propTypes = {

  }

  render() {
    return(
      <Fragment>
        <ArticleList />
      </Fragment>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
