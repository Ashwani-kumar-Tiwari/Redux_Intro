import React, {useState} from 'react'

function Bat() {
    const [bats, setBat] = useState(5);
    const [value, setValue] = useState("");
    return (
        <div>
           <h1>Number of Bats {bats}</h1> 
           <input value = {value}
           onChange = {(e) => {
               setValue(e.target.value)
           }}></input>
           <button onClick = {() => {
               setBat(bats - value);
                setValue("");
           }}>Buy Bat</button>
        </div>
    )
}

export default Bat
