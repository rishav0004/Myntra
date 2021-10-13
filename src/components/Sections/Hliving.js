import React from 'react'
import CardProps from '../JS File/CardProps';
import './men.css'

function Hliving() {
    return (
        <div className="main__men">
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/10/7e723f74-16a8-434e-a1bb-097aa680f99b1604952942883-1.jpg"
            coname = "Klothe"
            desc = "210 TC Bedsheet "
            price = {799}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/22/8fbe8f5b-d941-4e9d-a6ea-621b7b9dad031608640887023-1.jpg"
            coname = "Klothee"
            desc = "Bedsheet"
            price = {765}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/5/b548135e-f5ad-4c8d-b630-2067bcc09bdc1620219953143-1.jpg"
            coname = "Sanded Edge"
            desc = "Lamp"
            price = {3220}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15043698/2021/8/5/8f07e8d9-7558-4963-93fa-27f96a27f9dc1628176676666PineWoodArcShapeStackedNightStandCumFloorLamp2.jpg"
            coname = "Exim Decor"
            desc = "Stand Lamp"
            price = {9999}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/18/e82aca4c-9418-4887-84f1-07513a9c68031608287893354-1.jpg"
            coname = "999Store"
            desc = "Traditional Mirror"
            price = {2699}
         />
         
        </div>
    )
}

export default Hliving
