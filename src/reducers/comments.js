import {normalizedComments} from '../sampleArticles'
import {arrToMap} from '../helpers'

const defaultState = arrToMap(normalizedComments) || {}

export default (state = defaultState, action) => {
  const {payload, type} = action

  return state
}
