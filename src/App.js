import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import ArticleList from './ArticleList'
import Filters from './Filters'
import store from './store'

class App extends Component {
  render() {
    return(

      <Provider store={store}>
        <Fragment>
          <Filters />
          <ArticleList />
        </Fragment>
      </Provider>

    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
