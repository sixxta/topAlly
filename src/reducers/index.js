import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./privileges').default,
  nav: require('./score').default,
  user: require('./user').default
})

export default rootReducer;
