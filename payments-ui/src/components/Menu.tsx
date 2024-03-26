import React, { useState } from 'react';
import logo from './logo.svg';

type MenuProps = {
    orderNumber: number
}

function Menu(props:MenuProps){

    const [orderId, setorderId] = useState<number>(props.orderNumber)

    const submit=() => {
        setorderId(orderId)
    }

    return(
        <div className="header">
            <h1> Payments Application </h1>
       
    <div className="divStyle">
        
    <p>
    <label > Order Id: </label>
    <input type = "number" id = "orderId"/>
    <button onClick = {submit} > Search </button>
    </p>
    </div> 
    </div>
    )
}

export default Menu;
