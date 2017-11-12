const INCREASE_SCORE = 'INCREASE_SCORE'
const RETURN_SCORE = 'RETURN_SCORE'

export const increaseScore = score => ({type: INCREASE_SCORE, score})
export const returnScore = () => ({type: RETURN_SCORE})

const startingScore = {userScore: 0, currentHighScore: 100};

export default reducer = (state = startingScore, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return Object.assign({}, state, {userScore: state.userScore + action.score})
    case RETURN_SCORE:
      return state
    default:
      return state
    }
}
