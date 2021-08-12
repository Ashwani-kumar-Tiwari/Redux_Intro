import React, {useState} from 'react'
import {connect} from "react-redux";

function Bat(props) {
    //const [bats, setBat] = useState(5);
    const [value, setValue] = useState("");
    return (
        <div>
           <h1>Number of Bats : {props.quantity}</h1> 
           <input value = {value}
           onChange = {(e) => {
               setValue(e.target.value)
           }}></input>
           <button onClick = {() => {
                props.setBat(value);
                setValue("");
           }}>Buy Bat</button>
        </div>
    )
}

//5 > provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variable change
    return store.Bat;
}
// dispatch action
const mapDispatchtoProps = dispatch => {
    //action
    // handler function
    return{
        setBat: (val) => {
            dispatch({
                type: "buy_bat",
                // data send to reducer function
                payload: val
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Bat);
