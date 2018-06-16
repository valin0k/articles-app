import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Articles from '../../Routes/Articles'
import Filters from '../Filters/index'
import Comments from '../../Routes/Comments'
import store from '../../store/index'
import {Provider as LangProvider, languages} from '../../LocalizationContext'
import NotFound from '../NotFound/index'
import LanguageSwitcher from '../LanguageSwitcher/index'
import NavMenu from '../NavMenu/index'

import './style.css'

class Index extends Component {
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
              <div className='appContainer'>
                <LanguageSwitcher/>
                <NavMenu />
                <Switch>
                  <Route component={Comments} path='/comments' />
                  <Route component={Filters} path='/filters' />
                  <Route component={Articles} path='/articles' />
                  <Route component={NotFound} path='*'/>
                </Switch>
              </div>
            </Router>
          </LangProvider>
        </Provider>
      )
    }
}

render(
  <Index />,
  document.getElementById('root')
)
