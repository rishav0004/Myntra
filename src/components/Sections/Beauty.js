import React from 'react'
import CardProps from '../JS File/CardProps';
import './men.css'


function Beauty() {
    return (
        <div className="main__men">
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4374584/2018/5/21/6f2ea57b-8d22-482c-bc06-3e7c3699dc641526885353723-Denver-Hamilton-Perfume-60-Ml-5421526885353706-1.jpg"
            coname = "Denver"
            desc = "Men Perfume"
            price = {194}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/135706/2021/9/17/d1b9afc6-b1d8-4ff7-8b9c-a4e3eccc2ece1631894160385-LOreal-Paris-Casting-Creme-Gloss-Hair-Color---316-Burgundy-8-1.jpg"
            coname = "LOreal"
            desc = " Hair color"
            price = {407}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10849058/2021/3/18/c2eee476-33da-4960-8bbc-29e3a5ab71a61616069554469-Maybelline-New-York-Hypercurl-Waterproof-Mascara---Black-92--1.jpg"
            coname = "Maybelline"
            desc = "Waterproof Mascara"
            price = {279}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2231190/2019/2/18/b560878d-9432-4220-a9b5-5c53b4cfc1351550486271472-United-Colors-of-Benetton-Men-United-Dreams-Go-Far-Eau-De-To-1.jpg"
            coname = "UCB"
            desc = "Men Go"
            price = {1050}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10727378/2020/6/9/eb292771-8d90-4a09-b87a-aa3018f11de41591691554912KAMAAYURVEDAUnisexPureRoseWater-200ml1.jpg"
            coname = "Ayurveda"
            desc = "Sustain Rose Water"
            price = {1295}
         />
         

         
        </div>
    )
}

export default Beauty
