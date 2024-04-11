import React from 'react'
import Image from '../assets/math.jpeg'

export default function Card(){
    return(
        <div className="card">           
            <img src={Image} alt="image not found" />
            <h3>Bhupendra</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis, </p>
        </div>
    );
}