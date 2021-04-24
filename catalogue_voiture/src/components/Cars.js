import React from 'react';
import '../Cars.css'

const Cars = ({brand, color}) => {

    console.log(brand)
    console.log(color)

    return(

        <div className = 'cars'>
            <p>Marque:{brand} </p>
            <p>Couleur: {color} </p>
        </div>
    )

}

export default Cars;