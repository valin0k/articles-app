import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

export default ({page, total, itemsPerPage}) => (
  <ul className='pagination'>
    {total && Array(Math.ceil(total / itemsPerPage + 1))
      .fill(1)
      .map((j, i) => (
        <li key={i}>
          {i ? <NavLink className='pagination-item'
            activeClassName='active'
            to={`/comments/${i}`}>{i}
          </NavLink>
            : ''}
        </li>
      ))}
  </ul>
)
