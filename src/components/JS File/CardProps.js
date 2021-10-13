import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../Css file/cardprops.css'

export default function CardProps({key,img,imgalt,coname,price,cartproduct,fetchCart}) {
  
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1)
    // alert('Product Added To your Bag')
  }

  const decrement = () =>{
    if (count===0){
      return;
    }
    setCount(count-1)
  }

  return (
    <Card className ="cardprops__main" sx={{maxWidth: 400, margin: 4 }}>
      <CardActionArea>
        <CardMedia
          style = {{height:"200px" ,width :"200px" , objectFit:"cover", objectPosition:"top"}}
          component="img"
          image={img}
          alt={imgalt}
        />
        <CardContent>
          <Typography style ={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            {coname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
          <Typography gutterBottom variant="h8" component="div" style ={{textAlign:'center'}}>
            {price}
          </Typography>
          <div className="bottom__Card">
          <button
            style ={{color:'orange',fontweight: "100"}}>
            Add to Cart
          </button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
