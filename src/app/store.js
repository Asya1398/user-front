import {combineReducers, createStore} from "redux";
import {newUserReducer,initialUsers} from "../features/newUser/newUserSlice";


const store = createStore(combineReducers({
    users:newUserReducer
}), {
    users: initialUsers
});
export default store;