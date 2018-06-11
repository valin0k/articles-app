import {LOAD_ALL_ARTICLES, START, SUCCESS, FAIL} from '../constants/actions'

export default store => next => action => {
  const {callApi} = action
  if(!callApi) return next(action)

  next({
    ...action,
    type: START + LOAD_ALL_ARTICLES
  })

  setTimeout(() => {
    fetch(callApi)
      .then(response => response.json())
      .then(data => next({
        ...action,
        data,
        type: SUCCESS + LOAD_ALL_ARTICLES}))
  }, 500)
}
