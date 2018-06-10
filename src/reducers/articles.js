import {normalizedArticles} from '../sampleArticles'
import {DELETE_ARTICLE} from '../constants/actions'

const defaultState = normalizedArticles || []

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch(type) {
    case DELETE_ARTICLE:
      return state.filter(article => article.id !== payload.id)
  }

  return state
}
