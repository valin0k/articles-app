import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import generateId from '../middlewares/generateId'
import callApi from '../middlewares/callApi'

const enhanceStore = applyMiddleware(generateId, callApi)

const store = createStore(reducers, {}, enhanceStore)


export default store
