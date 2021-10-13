import React from 'react'
import CardProps from '../JS File/CardProps';
import './men.css'

function Women() {
    return (
        <div className="main__men">
        <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg"
            coname = "Anouk"
            desc = "Yoga design kurta"
            price = {999}
         />
         <CardProps 
            img = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10842022/2019/11/6/a373d08e-a2fb-4cbf-9a19-dd9679ea0c181573032453223-Libas-Women-Dresses-7681573032451400-1.jpg"
            coname = "Libas"
            desc = "Women Black dress"
            price = {835}
         />
         <CardProps 
         img = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/78f5fcb9-5d4c-4f0a-aa20-809f3a5ca9381581757541546-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-6.jpg"
         coname = "Indo Era"
         desc = "Floral kurta"
         price = {1349}
        />
        <CardProps 
         img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13923864/2021/4/1/b92c0950-b4b5-44f3-93b4-09ad842e85291617268552442VarangaTealAndGoldMirrorWorkEmbroideryKurtaWith34ThMirrorWor1.jpg"
         coname = "Varanga"
         desc = "Women kurta"
         price = {1619}
        />
        <CardProps 
         img = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12222036/2020/10/6/d7ae3065-98d4-42d0-b244-d2b18802ff101601959656577-SASSAFRAS-Women-Black-Solid-High-Neck-Cropped-Top-4441601959-1.jpg"
         coname = "Safras "
         desc = "Highneck top"
         price = {429}
        />
    </div>
    )
}

export default Women
