import {normalizedComments} from '../sampleArticles'
import {arrToMap} from '../helpers'
import {ADD_COMMENT} from '../constants/actions'

const defaultState = arrToMap(normalizedComments) || {}

export default (state = defaultState, action) => {
  const {payload, type} = action

  switch(type) {
    case ADD_COMMENT:
      return {...state, [payload.id]: payload.comment}
  }

  return state
}
