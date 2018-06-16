import React from 'react'
import {NavLink} from 'react-router-dom'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

export default () => (
  <LangConsumer>
    {({language}) => (
      <ul className='navMenu'>
        <li><NavLink to='/comments' activeClassName='active'>{language.comments}</NavLink></li>
        <li><NavLink to='/filters' activeClassName='active'>{language.filters}</NavLink></li>
        <li><NavLink to='/articles' activeClassName='active'>{language.articles}</NavLink></li>
      </ul>
    )}
  </LangConsumer>
)
