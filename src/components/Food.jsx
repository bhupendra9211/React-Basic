import React from "react";

export default function Food(){
    let food1 = "Apple"
    let food2 = "Mango"
    return(
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat error minima consectetur maxime eveniet commodi, itaque aperiam sapiente illum! Dolor itaque unde esse recusandae. Dolorem beatae atque a itaque iusto!</p>
            <ul>
                <li>Papaya</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
                <li>Banana</li>
            </ul>
        </div>
    );
}