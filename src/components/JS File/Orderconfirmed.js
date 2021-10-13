import React from 'react'
import { useHistory } from 'react-router';



function Orderconfirmed({orderdetail}) {

    const history = useHistory()
    // const home = history.push("/")
   
    return (
        <div className="order__confirm">
            <h1>Hello, {orderdetail?.customer?.firstname} {orderdetail?.customer?.lastname}</h1>
            <h2>Thankyou for Ordering</h2>
            <h2>Your Order No. is {orderdetail?.id} </h2>
            <h4>Order Total : {orderdetail?.order?.subtotal?.formatted_with_symbol}</h4>
            <h3>Order will reach you soon</h3>
            <button onClick={()=>history.push('/')} >
                Continue Shopping
            </button>
        </div>
    )
}

export default Orderconfirmed
