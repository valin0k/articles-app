import React from 'react'
import {NavLink} from 'react-router-dom'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

const activeStyle = {backgroundColor: '#c0ccff'}

export default () => (
  <LangConsumer>
    {({languages, currentLang}) => (
      <ul className='navMenu'>
        <li><NavLink to='/comments' activeStyle={activeStyle}>{languages[currentLang].comments}</NavLink></li>
        <li><NavLink to='/filters' activeStyle={activeStyle}>{languages[currentLang].filters}</NavLink></li>
        <li><NavLink to='/articles' activeStyle={activeStyle}>{languages[currentLang].articles}</NavLink></li>
      </ul>
    )}
  </LangConsumer>
)
