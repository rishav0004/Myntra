import React from 'react'

const Shopcard = ({img,link}) => {
    
    return (
        <>
            <img onClick = {link} style ={{width:'200px', margin:'34px', cursor:'pointer'}} src={img}  alt ="images" />
        </>
    )
}

export default Shopcard
