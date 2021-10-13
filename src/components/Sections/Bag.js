import React from 'react'
import { useHistory } from 'react-router'
import './bag.css'

function Bag({cart,removeFromCart}) {
    const history = useHistory()
    return (
        <div className="checkout">
            <div className="checkout__left">

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

{
    cart?.line_items?.map(item=>{
return <div className="checkoutProduct" key={item.id}>
            <img src={item.image.url}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.name}</p>
                <p className="checkoutProduct__price">
                    <strong>{item.price.formatted_with_symbol} * {item.quantity} = {cart.currency.symbol} {item.price.raw * item.quantity}</strong>
                </p>
                <button onClick={()=>removeFromCart(item.id)}>Remove from Basket</button>
            </div>
            </div>

    })
}
                    

                    
                </div>
            </div>

            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal ({cart?.total_items} items): <strong>{ cart?.subtotal?.formatted_with_symbol}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </div>

                <button onClick={()=>history.push("/checkout")}>
                  <h3>PLACE ORDER</h3>
                  </button>
            </div>
        </div>
    )
}

export default Bag






// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import './bag.css'
// import Checkbox from '@mui/material/Checkbox';
// import { useHistory } from 'react-router';

// // cart?.line_items?.map(item => {
// //   return 

// {item.quantity} * {item.price.formatted_with_symbol} = {item.line_total.formatted_with_symbol}

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Bag({cart}) {
//   const [expanded, setExpanded] = React.useState(false);
//   const history = useHistory()

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//       <>

//       {/* left side */}

//       <div className="main__card">
            
//             {
//                 cart?.line_items?.map(item => {
//                     return <Card sx={{ maxWidth: 345}} key = {item.id}>
//                     <CardHeader
//                       action={
//                         <IconButton aria-label="settings">
//                         </IconButton>
//                       }
//                       title={item.name}
//                       subheader="Desc"
//                     />
//                     <CardMedia
//                       component="img"
//                       height="194"
//                       image={item.image.url}
//                       alt="Paella dish"
//                     />
//                     <CardContent>
//                       <Typography variant="body2" color="text.secondary">
//                         {item.line_total.product_name}
//                       </Typography>
//                     </CardContent>
//                     <CardActions disableSpacing>
//                       <IconButton aria-label="add to favorites">
//                         <FavoriteIcon />
//                       </IconButton>
//                       <IconButton aria-label="share">
//                         <ShareIcon />
//                       </IconButton>
//                       <ExpandMore
//                         expand={expanded}
//                         onClick={handleExpandClick}
//                         aria-expanded={expanded}
//                         aria-label="show more"
//                       >
//                         <ExpandMoreIcon />
//                       </ExpandMore>
//                     </CardActions>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//                       <CardContent>
//                         <Typography paragraph>Method:</Typography>
//                         <Typography paragraph>
//                           {item.quantity} * {item.price.formatted_with_symbol} = {item.line_total.formatted_with_symbol}
//                         </Typography>
                        
//                       </CardContent>
//                     </Collapse>
//                   </Card>
//                 })
//             }

                


              
          
     
// </div>
    

// {/* Right side */}


// <div className="right__side">
//      <div className="order_desc">
//        <div className="head">
//           <Checkbox {...label} />
//           <h5 style ={{marginTop: '5px' , fontWeight:"200"}}>
//             Add Gift Card for free
//           </h5>
//        </div>
//        <div className="price">
//          <h5>Total items : <span className='price__number'>{cart?.total_items}</span></h5>
//          <h5>Total Price to be paid : <span className='price__number'>{cart?.subtotal?.formatted_with_symbol}</span> </h5>
//        </div>
//        <div className="chkbtn">
         
                  
//         </div>                                
//           <div className="paymentbtn" >
//           <button onClick={() =>{history.push('/checkout')}}>
//            Checkout Now
//           </button>
//               </div>

//           </div>
        
//      </div>



// </>

//   );
// }


// {cart?.total_items} and {cart?.subtotal?.formatted_with_symbol}











// import React from 'react'
// import './bag.css'

// function Bag({cart}) {
//     return (
//         <>
//           <div >
            
//                 <div className="bag__header">
//                             <div className="pincode">
//                             <h4 style={{ fontWeight: '300' }}>Check delivery time & service</h4>
//                             <input type="text" placeholder="Enter PinCode" />
//                             </div>
//                             <div className="main__card">
//                                 <h4 style={{ fontWeight: '300' }}>Combo Offer</h4>
//                                 <div className="card__comp">
//                                     <img src="https://assets.myntassets.com/f_webp,w_111,h_148,dpr_1,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/10046883/2019/11/21/1ab261c2-dbf9-43bd-9351-0375bec4a3c41574321453635-Roadster-Men-Jeans-3271574321451223-1.jpg"
//                                         alt="image" class="img-thumbnail" />
//                     {
//                         cart?.line_cart?.map((cart) => {
//                             return <div className="card__desc" key = {cart.id}>
//                                         <h4 style={{ fontWeight: '300' }}>{cart.name}</h4>
//                                         <h4 style={{ fontWeight: '300' }}>Men Jeans</h4>
//                                         <h4 style={{ fontWeight: '300' }}>{cart.price.formatted_with_symbol}</h4>
//                                         <div className="qty">
//                                             <button>-</button>
//                                             <h3 style={{ fontWeight: '300' }}>1</h3>
//                                             <button>+</button>
//                                         </div>
//                                         <button className="checkout" style={{ border: 'none', color: "#ff6a8d", backgroundColor: "whitesmoke", borderRadius: '10px', textAlign: "center" }}>Proceed To checkout</button>
//                                     </div>
        
                                
//                             })
//                         }
//                             </div> 
        
//                             </div>
//                             <div className="right__side">
//                                 <h3>Total Amount</h3>
//                                 <h4>total Items</h4>
//                                 <p>total amount to be paid: </p>
//                                 <div className="btn">
//                                     <button>
//                                         Cash on Delivery
//                                     </button>
//                                     <button>
//                                         Netbanking
//                                     </button>
//                                     <button>
//                                         UPI pay
//                                     </button>
//                                 </div>
        
//                             </div>
        
                    
//                 </div>
        
//                 </div>
            
        
       
//         </>
//     )
// }

// export default Bag
