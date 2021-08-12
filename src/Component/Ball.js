import React, {useState} from 'react';
// pull state from store
import {connect} from "react-redux";

function Ball(props) {
    console.log(props);
    //state -> props(redux)
    //prop -> function
    // const [balls, setBalls] = useState(15);
    //6
    return (
        <div>
            <h1>Number of Balls : {props.balls}</h1>
            <button
                onClick = {props.buyBalls}
            >Buy Balls</button>
            <button
                onClick = {props.sellBalls}
            >Sell Balls</button>
        </div>
    )
}
//5 > provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variable change
    return store.Ball;
}
// dispatch action
const mapDispatchtoProps = dispatch => {
    //action
    // handler function
    return{
        buyBalls: () => {
            //dispatch action
            return dispatch({type: "buy_ball"})
        },
        sellBalls: () => {
            //dispatch action
            return dispatch({type: "sell_ball"})
        }
    }
}
// higher order function
const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(Ball);
export default HigherOrderComponent;
