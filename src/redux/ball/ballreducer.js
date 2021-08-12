let initialState = {
    balls : 5
}

function BallReducer (state = initialState, action) {
    // nothing
    // update
    // n type of changes
    //console.log("in store", action);
    // state change logic
    console.log(state);
    switch (action.type){
        // store update
        case "buy_ball":
            let buyState = {
                balls: state.balls - 1
                // ...state
            }
            return buyState;
            case "sell_ball":
                let sellState = {
                    balls: state.balls + 1
                    // ...state
            }
            return sellState;
            
        default:
            return state;
    }
}

export default BallReducer;