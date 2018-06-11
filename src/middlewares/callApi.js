export default store => next => action => {
  const {callApi} = action
  if(!callApi) return next(action)

  fetch(callApi)
    .then(response => response.json())
    .then(data => next({...action, data}))
}
