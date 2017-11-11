import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
// import {createLogger} from 'redux-logger'

import thunkMiddleware from 'redux-thunk'


const middleware = []
const enhancers = []

/* ------------- Redux Configuration ------------- */
middleware.push(thunkMiddleware)
// middleware.push(createLogger({collapsed: true}))
/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware))
/* ------------- AutoRehydrate Enhancer ------------- */


/* ------------- Create Store! ------------- */

const store = createStore(rootReducer, compose(...enhancers))

export default store;
