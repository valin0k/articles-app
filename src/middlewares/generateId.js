export default store => next => action => {
  if (action.generateId) {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    return next({
      ...action,
      payload: {
        ...action.payload, id
      }
    })
  }

  next(action)
}
