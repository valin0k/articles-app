import {SET_SELECT_FILTER, SET_DATE_FILTER} from '../constants/actions'

const defaultState = {
  dateRange: {
    from: null,
    to: null
  },
  select: []
}

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch(type) {
    case SET_SELECT_FILTER:
      return {...state, select: payload.selectedArticles}
    case SET_DATE_FILTER:
      return {...state, dateRange: payload.date}
  }

  return state
}
