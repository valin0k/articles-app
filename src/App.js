import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Articles from './Routes/Articles'
import Filters from './Components/Filters'
import Comments from './Routes/Comments'
import store from './store'
import NotFound from './Components/NotFound'

const activeStyle={backgroundColor: '#c0ccff'}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <ul>
              <li><NavLink to='/comments' activeStyle={activeStyle}>Comments</NavLink></li>
              <li><NavLink to='/filters' activeStyle={activeStyle}>Filters</NavLink></li>
              <li><NavLink to='/articles' activeStyle={activeStyle}>Articles</NavLink></li>
            </ul>
            <Switch>
              <Route component={Comments} path='/comments' />
              <Route component={Filters} path='/filters' />
              <Route component={Articles} path='/articles' />
              <Route component={NotFound} path='*'/>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
