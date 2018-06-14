import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const activeStyle = {backgroundColor: '#c0ccff'}

export default ({page, total, itemsPerPage}) => (
  <Fragment>
    {total && Array(Math.ceil(total / itemsPerPage + 1))
      .fill(1)
      .map((j, i) => (
        <Fragment key={i}>
          {i ? <NavLink className='pagination-item'
            activeStyle={activeStyle}
            to={`/comments/${i}`}>{i}
          </NavLink>
            : ''}
        </Fragment>
      ))}
  </Fragment>
)
