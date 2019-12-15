import { createStore } from 'redux'
import reducers from '../reducers/index'

export const Store = createStore(reducers)