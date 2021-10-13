import React from 'react'
import CardProps from '../JS File/CardProps';
import './men.css'

function Kids() {
    return (
        <div className="main__men">
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/2/8004941c-ee75-41b4-a1a0-9008edeb470f1614696496320-2.jpg"
            coname = "CUTECUMBER"
            desc = "Girl solid dress"
            price = {999}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/5/e01a740c-1f62-47e6-87fa-210276b60e221607167721737-1.jpg"
            coname = "StyleStone"
            desc = "Girl solid dress"
            price = {515}
         />
         <CardProps 
         img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11840386/2020/5/8/fff46b5f-5057-47bb-96ec-3597dcf71a821588918409828-Wish-Karo-Baby-Girls-Satin-Frock-Dress-7701588918409121-1.jpg"
         coname = "Wish Karo"
         desc = "Girl Floral solid dress"
         price = {839}
      />
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/24/073a6953-acf6-4c5b-8e85-0e7bfd69288c1624511290010-1.jpg"
            coname = "H&M"
            desc = "Girl solid dress"
            price = {359}
        />
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/3/a482f95a-9b0e-448d-b8bb-29df5b165ff31620037518133-1.jpg"
            coname = "Style Bug"
            desc = "Girl Lace A-Line dress"
            price = {702}
        />
    </div>
    )
}

export default Kids
