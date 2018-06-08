import {articles} from '../sampleArticles'
import {DELETE_ARTICLE} from 'constants'

const defaultState = articles || []

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch(type) {
    case DELETE_ARTICLE:
      return state.filter(article => article.id !== payload.id)
  }

  return state
}
