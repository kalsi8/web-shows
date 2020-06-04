import { createStore, applyMiddleware } from 'redux';
import createReducer from './ducks/reducers';
import thunk from 'redux-thunk';



const configureStore = (initialState = {}) => {
    const store = createStore(createReducer(),initialState,applyMiddleware(thunk))
    return store;
}

export default configureStore;