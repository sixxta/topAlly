const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'

export const logIn = user => ({type: LOG_IN, user})
export const logOut = () => ({type: LOG_OUT})
export const getUser = () => ({type: GET_USER})

const defaultUser = {email: '', name: ''};

export default reducer = (state = defaultUser, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user
    case LOG_OUT:
      return defaultUser
    case GET_USER:
      return state
    default:
      return state
    }
}
