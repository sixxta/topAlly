const TOGGLE_PRIVILEGE = 'TOGGLE_PRIVILEGE'
const SEE_PRIVILEGE = 'SEE_PRIVILEGE'

export const togglePrivilege = attribute => ({type: TOGGLE_PRIVILEGE, attribute})
export const seePrivilege = () => ({type: SEE_PRIVILEGE })

const defaultPrivilege = {
  isWhite: true,
  isStraight: true,
  isMale: true,
  isAbleBodied: true,
  isCisgender: true,
  isNotPoorOrWorkingClass: true
};

export default reducer = (state = defaultPrivilege, action) => {
  switch (action.type) {
    case TOGGLE_PRIVILEGE:
      return Object.assign({}, state, {[action.attribute]: !state[action.attribute]})
    case SEE_PRIVILEGE:
      return state
    default:
      return state
    }
}
