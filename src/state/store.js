import { createStore, applyMiddleware, compose } from 'redux'
import createReducer from './ducks/reducers'
import thunk from 'redux-thunk'

const configureStore = (initialState = {}) => {
  let enhancer
  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  } else {
    enhancer = applyMiddleware(thunk)
  }
  const store = createStore(createReducer(), initialState, enhancer)
  return store
}

export default configureStore
