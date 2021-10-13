import React from 'react'
import Shopcard from './Shopcard'
import '../Css file/shoppingcard.css'
import Card from './Card'
import { useHistory } from 'react-router-dom'

function Shoppingcard() {
    
    

    const history = useHistory()
    
    const men = () =>{
        history.push('/men')
    }
    const bedsheet =  () =>{
        history.push('/hliving')
    }
    const women = () =>{
        history.push('/women')
    }


    return (
        <div className = "shop">
                <Shopcard 
                    link = {men}
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/226e21ef-d210-418d-aa0b-fb77f74372181632716459319-Adidas_-_Reebok.jpg" />
                <Shopcard 
                    link = {bedsheet} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/0ef4168a-db22-4060-95c3-519c6d353c391632716459328-All.jpg" />
                <Shopcard 
                    link = {women} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/8d22dd87-95ec-4417-b950-8504c43b7d7e1632716459338-Anouk-_Sangria.jpg" />
                <Shopcard 
                    link = {women} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/29/26704bec-832e-40dc-9045-2bd40b7bd1ba1632934770682-image_jpeg_471946816.jpg" />
                <Shopcard 
                    link = {men} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/67ed4b66-986c-414e-af01-1594ed2612621632716459382-BB-_VH___Shirts_-_Trousers.jpg" />
                <Card/>
                <Shopcard 
                    link = {women} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/1668d711-5d20-4ab0-99a4-ff6d0a1451471632754360772-W.jpg" />
                <Shopcard 
                    link = {men} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/3ca6047f-2013-4baa-bbbc-158e10a51d9f1632754360733-U.S.-Polo-Assn..jpg" />
                <Shopcard 
                    link = {women} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/a4494c22-e4e2-49de-8d2b-7753fea4d7ed1632754360763-Vero-Moda.jpg" />
                <Shopcard 
                    link = {men} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/82aa0fed-cc09-4553-b597-ce94b64ac6611632754360606-Jack-_-Jones.jpg" />
                <Shopcard 
                    link = {women} 
                    img = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/a0d270e4-703d-4683-b641-0f9ca586a17b1632754360615-Levis.jpg" />
        </div>
    )
}

export default Shoppingcard
