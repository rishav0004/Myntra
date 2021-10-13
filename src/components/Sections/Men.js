import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../Css file/cardprops.css'
import {useParams} from 'react-router'
import {useEffect} from 'react'

export default function CardProps({productList,addToCart,fetchProductByCategory}) {
  
let {slug} = useParams()
console.log(slug)

useEffect(() =>{
  if(slug) {fetchProductByCategory(slug)}
}, [slug] )

  return (
    <div className="main">
    {
        productList?.map((items) => {
          return <Card className ="cardprops__main" sx={{maxWidth: 1300, margin: 5 }} style = {{display: 'flex', justifyContent:"center", padding : "10px", paddingLeft:"10px"}} >
        <CardActionArea className = "card__main" style ={{marginRight:"20px"}} key = {items.id}>
                <CardMedia
                  style = {{height:"200px" ,width :"200px" , objectFit:"cover", objectPosition:"top"}}
                  component="img"
                  image={items.image.url}
                  alt={items.id}
                />
                <CardContent>
                  <Typography style ={{textAlign:'center' , fontWeight:'200'}} gutterBottom variant="h5" component="div">
                    {items.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  </Typography>
                  <Typography gutterBottom variant="h8" component="div" style ={{textAlign:'center'}}>
                    {items.price.formatted_with_symbol}
                  </Typography>
                  <div className="bottom__Card">
                  <button
                    onClick ={()=>addToCart(items.id,1)}
                    style ={{color:'orange',fontweight: "100"}}>
                    Add to Cart
                  </button>
                  </div>
                </CardContent>
              </CardActionArea>
      
      
    </Card> 
   })
      }
      </div>
  );
}





// import * as React from 'react';
// // import { useState } from 'react';
// import CardProps from '../JS File/CardProps';
// import './men.css'
// // import { MenProducts } from '../Products/MenProducts';

// export default function Men({productList,fetchCart}) {
  
//   // const [item, setItem] = useState(MenProducts)

//   return (
//       <div className="main__men">
//         {
//           productList.map((items) => {
//             return <CardProps
//                         key = {items.id} 
//                         img = {items.image.url}
//                         coname = {items.name}
//                         desc = {items.description}
//                         price = {items.price.formatted_with_symbol}
//                         fetchCart = {fetchCart}
//                     />
//           })
//         }
        
//          {/* <CardProps 
//             img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10046883/2019/11/21/1ab261c2-dbf9-43bd-9351-0375bec4a3c41574321453635-Roadster-Men-Jeans-3271574321451223-1.jpg"
//             coname = "Roadster"
//             desc = "Men Slim Fit Jeans"
//             price = "519"
//          />
//          <CardProps 
//          img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11302040/2020/1/23/9d8c95b4-d8b7-4c7d-9f31-1815afdab4581579763494411-HERENOW-Men-Shirts-5691579763491209-1.jpg"
//          coname = "HERE&NOW"
//          desc = "Men Slim Fit Casual Shirt"
//          price = "699"
//         />
//         <CardProps 
//          img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/3/c97ca299-c8de-41c3-80bd-5353842c9e7a1614759650651-1.jpg"
//          coname = "GANT"
//          desc = "Regular Fit Casual Shirt"
//          price = "3749"
//         />
//         <CardProps 
//          img = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/15/b5a50322-379c-4055-b465-f3c61592cc7c1573837352214-1.jpg"
//          coname = "Armani "
//          desc = "Men Silicone Touchscreen"
//          price = "8499"
//         /> */}

    

//       </div>
//   );
// }
