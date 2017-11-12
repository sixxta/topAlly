import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  privileges: require('./privileges').default,
  score: require('./score').default,
  user: require('./user').default,
  tasks: require('./tasks').default
})

export default rootReducer;
