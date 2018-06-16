import React from 'react'
import {NavLink} from 'react-router-dom'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

const activeStyle = {backgroundColor: '#c0ccff'}

export default () => (
  <LangConsumer>
    {({language}) => (
      <ul className='navMenu'>
        <li><NavLink to='/comments' activeStyle={activeStyle}>{language.comments}</NavLink></li>
        <li><NavLink to='/filters' activeStyle={activeStyle}>{language.filters}</NavLink></li>
        <li><NavLink to='/articles' activeStyle={activeStyle}>{language.articles}</NavLink></li>
      </ul>
    )}
  </LangConsumer>
)
