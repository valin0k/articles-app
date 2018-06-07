import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {

  }

  render() {
    return(
      <Fragment>
        Hello World!
      </Fragment>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
