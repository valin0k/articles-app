import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

export default () => (
  <Fragment>
    {ReactDOM.createPortal(getLoader(), document.getElementById('loader'))}

  </Fragment>
)

function getLoader() {
  return (
    <div className='loader-wrapper'>
      <h1>Loading data ...</h1>
    </div>
  )
}
