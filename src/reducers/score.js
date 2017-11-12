const INCREASE_SCORE = 'INCREASE_SCORE'
const RETURN_SCORE = 'RETURN_SCORE'

export const increaseScore = score => ({type: INCREASE_SCORE, score})
export const returnScore = () => ({type: RETURN_SCORE})

const startingScore = {userScore: 0, currentHighScore: 100, highScore: false};

export default reducer = (state = startingScore, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return state.userScore + action.score > state.currentHighScore
      ? Object.assign({}, state, {highScore: true}, {userScore: state.userScore + action.score}, {currentHighScore: state.userScore + action.score})
      : Object.assign({}, state, {userScore: state.userScore + action.score})
    case RETURN_SCORE:
      return state
    default:
      return state
    }
}
