import React from 'react'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

export default () => (
  <div>
    <LangConsumer>
      {({selected, handleChangeLang}) => (
        <ul className='languages-switcher'>
          <li className={getClassName('ru', selected)} onClick={handleChangeLang('ru')}>Ru</li>
          <li className={getClassName('en', selected)} onClick={handleChangeLang('en')}>En</li>
        </ul>
      )}
    </LangConsumer>
  </div>
)

const getClassName = (linkLang, selected) => (
  linkLang === selected ? 'active' : ''
)
