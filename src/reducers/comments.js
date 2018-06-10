import {normalizedComments} from '../sampleArticles'

const defaultState = normalizedComments || []

export default (state = defaultState, action) => {
  const {payload, type} = action

  return state
}
