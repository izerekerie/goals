import * as actions from '../actions/actionTypes'

let initialState=[
    {
        goalName:"stupid",
        goalDescription:"stupid stupid stupid"
    },

]

export default function goalReducer(state=initialState,action){

    switch(action.type){
        case actions.ADD_GOAL:
            return[...state,
            {
              goalName:action.payload.goalName,
              goalDescription:action.payload.goalDescription
            }]
        case actions.GET_ALL_GOALS:
            
            return state.map(goal=>{
                console.log("goal name",goal.goalName)
                return{
                goalName:goal.goalName,
                goalDescription:goal.goalDescription
                }
            })
        case actions.FETCH_GOALS:
            return action.goals
        default:
           return state
            
    }
}