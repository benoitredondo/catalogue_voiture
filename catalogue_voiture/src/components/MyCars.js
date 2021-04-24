import React from 'react'
import Cars from './Cars'

const MyCars = () => {

    return(
        <>
        <div>CATALOGUE DE VOITURES</div>
        <Cars color='red' brand='mercedes'/>
        <Cars color='black' brand='peugeot'/>
        <Cars color='blue' brand='Tesla'/>
      
        
        
        </>
    )
}

export default MyCars;