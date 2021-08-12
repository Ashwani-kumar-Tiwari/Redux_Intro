import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballreducer";
//merged store
console.log("root-reducer");
const rootReducer = combineReducers ({
    Ball : BallReducer,
    Bat: BatReducer
});

export default rootReducer;