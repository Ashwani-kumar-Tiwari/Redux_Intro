import { createStore } from "redux";
//1
let initialState = {
    balls : 5
}
//2
function BallReducer (state = initialState, action) {
    // nothing
    // update
    // n type of changes
    //console.log("in store", action);
    // state change logic
    switch (action.type){
        // store update
        case "buy_ball":
            let buyState = {
                balls: state.balls - 1
            }
            return buyState;
        case "sell_ball":
            let sellState = {
                balls: state.balls + 1
            }
            return sellState;
            
        default:
            return state;
    }
}
//3
const store = createStore(BallReducer)

export default store;