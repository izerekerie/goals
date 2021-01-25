import {createStore} from "redux"
import goalReducer from '../reducers/goalReducer'

const goalStore=createStore(goalReducer)

export default goalStore