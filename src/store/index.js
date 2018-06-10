import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import generateId from '../middlewares/generateId'

const enhanceStore = applyMiddleware(generateId)

const store = createStore(reducers, {}, enhanceStore)


export default store
