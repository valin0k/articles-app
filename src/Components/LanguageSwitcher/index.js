import React from 'react'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

export default () => (
  <div>
    <LangConsumer>
      {({handleChangeLang, currentLang}) => (
        <ul className='languages-switcher'>
          <li className={getClassName('ru', currentLang)} onClick={handleChangeLang('ru')}>Ru</li>
          <li className={getClassName('en', currentLang)} onClick={handleChangeLang('en')}>En</li>
        </ul>
      )}
    </LangConsumer>
  </div>
)

const getClassName = (linkLang, currentLang) => (
  linkLang === currentLang ? 'active' : ''
)
