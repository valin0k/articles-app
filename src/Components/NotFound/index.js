import React, {Component} from 'react'
import {Consumer as LangConsumer} from '../../LocalizationContext'

export default () => (
  <h2>
    <LangConsumer>
      {({currentLang, languages}) => languages[currentLang].notFound}
    </LangConsumer>
    :(
  </h2>
)
