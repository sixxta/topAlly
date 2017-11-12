const GET_ALL_TASKS = 'GET_ALL_TASKS'
const GET_COMPLETED_TASKS = 'GET_COMPLETED_TASKS'
const ADD_COMPLETED_TASK = 'ADD_COMPLETED_TASK'

export const getAllTasks = () => ({type: GET_ALL_TASKS})
export const getCompletedTasks = () => ({type: GET_COMPLETED_TASKS})
export const addCompletedTask = task => ({type: ADD_COMPLETED_TASK, task})

const totalTasks = [{
  id: 1,
  name: 'Abolish the Police and Prisons',
  category: 'isWhite',
  points: 5000000,
  description: 'Enact prison abolition and end the racist system of policing that destroys the lives of countless people of color',
  type: 'Systematic Change',
  form: 'link'
}
];

const defaultTasks = {allTasks: totalTasks, completedTasks: []};

export default reducer = (state = defaultTasks, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return state.allTasks
    case GET_COMPLETED_TASKS:
      return state.completedTasks
    case ADD_COMPLETED_TASK:
      return state
    default:
      return state
    }
}
