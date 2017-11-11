const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

export const logIn = user => ({type: LOG_IN, user})
export const logOut = () => ({type: LOG_OUT})

const defaultUser = {};

export default reducer = (state = defaultUser, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user
    case LOG_OUT:
      return defaultUser
    default:
      return state
    }
}
