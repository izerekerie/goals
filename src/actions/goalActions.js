import * as actions from './actionTypes'

export const addGoal=(goalData)=>{
    return {
        type:actions.ADD_GOAL,
        payload:goalData
    }
}

export const getAllGoals=()=>{
    
    return{
        type:actions.GET_ALL_GOALS
    }
}
export const  fetchGoals=(goals)=>{
    return{
        type:actions.FETCH_GOALS,goals
    }
}
