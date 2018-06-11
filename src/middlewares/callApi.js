import {START, SUCCESS} from '../constants/actions'

export default store => next => action => {
  const {callApi} = action
  if(!callApi) return next(action)

  next({
    ...action,
    type: action.type + START
  })

  setTimeout(() => {
    fetch(callApi)
      .then(response => response.json())
      .then(data => next({
        ...action,
        data,
        type: action.type + SUCCESS}))
  }, 500)
}
