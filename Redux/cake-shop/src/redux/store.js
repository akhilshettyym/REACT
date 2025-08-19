import { createStore, combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from './ice/iceReducer';

// export const cakeStore = createStore(cakeReducer)
// export const iceStore = createStore(iceReducer)
const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer)

export default store;