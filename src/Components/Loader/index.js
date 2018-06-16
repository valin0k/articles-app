import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Consumer as LangConsumer} from '../../LocalizationContext'
import './style.css'

export default () => (
  <Fragment>
    {ReactDOM.createPortal(getLoader(), document.getElementById('loader'))}
  </Fragment>
)

function getLoader() {
  return (
    <div className='loader-wrapper'>
      <LangConsumer>
        {({language}) => <h1>{language.loading} ...</h1>}
      </LangConsumer>
    </div>
  )
}
