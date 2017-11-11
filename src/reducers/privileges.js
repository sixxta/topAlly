const TOGGLE_PRIVILEGE = 'TOGGLE_PRIVILEGE'

export const togglePrivilege = attribute => ({type: TOGGLE_PRIVILEGE, attribute})

const defaultPrivilege = {
  isWhite: true,
  isStraight: true,
  isMale: true,
  isAbleBodied: true,
  isCisgender: true
};

export default reducer = (state = defaultPrivilege, action) => {
  switch (action.type) {
    case TOGGLE_PRIVILEGE:
      return Object.assign({}, state, {attribute: !state.attribute})
    default:
      return state
    }
}
