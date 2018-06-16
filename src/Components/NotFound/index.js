import React from 'react'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

export default () => (
  <h2 className='notFound'>
    <LangConsumer>
      {({language}) => language.notFound}
    </LangConsumer>
    :(
  </h2>
)
