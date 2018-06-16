import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Articles from './Routes/Articles'
import Filters from './Components/Filters'
import Comments from './Routes/Comments'
import store from './store'
import {Provider as LangProvider, languages} from './LocalizationContext'
import NotFound from './Components/NotFound'
import LanguageSwitcher from './Components/LanguageSwitcher'
import NavMenu from './Components/NavMenu'

class App extends Component {
    state = {
      lang: 'en'
    }
    handleChangeLang = lang => e => this.setState({lang})

    render () {
      const providerValue = {
        language: languages[this.state.lang],
        handleChangeLang: this.handleChangeLang,
        selected: this.state.lang
      }

      return (
        <Provider store={store}>
          <LangProvider value={providerValue}>
            <Router>
              <Fragment>
                <LanguageSwitcher/>
                <NavMenu />
                <Switch>
                  <Route component={Comments} path='/comments' />
                  <Route component={Filters} path='/filters' />
                  <Route component={Articles} path='/articles' />
                  <Route component={NotFound} path='*'/>
                </Switch>
              </Fragment>
            </Router>
          </LangProvider>
        </Provider>
      )
    }
}

render(
  <App />,
  document.getElementById('root')
)
