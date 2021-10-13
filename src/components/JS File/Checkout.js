import React  from 'react'
import {Input} from '@mui/material'
import '../Css file/checkout.css'
import commerce from '../../lib/commerce'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'



function Checkout({cart, setorder}) {

    const history = useHistory()

    const [firstname, setFirstname] = useState("")
    const [lastname , setLastname] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [zipcode, setZipcode] = useState("")

    
    // generate token
    const [generatedToken, setGeneratedToken] = useState({})
    
    // for country list
    const [countryList, setCountryList] = useState([])
    const [country, setCountry] = useState(null)
    
    // for subdivision list
    const [subdivisionList, setSubdivisionList] = useState([])
    const [subdivision, setSubdivision] = useState([])
    
    // for shipping area wise list
    const [shipping, setShipping] = useState(null)
    const [shippingOptions, setShippingOptions] = useState(null)
    

    // functions 

    const handlesubmit=async(e) =>{
        e.preventDefault()
        
        if (generatedToken){
        
        const incomingOrder = await commerce.checkout.capture(generatedToken.id, {
            line_items: generatedToken.live.line_items,
            customer: {
              firstname: firstname,
              lastname: lastname,
              email: email
            },
            shipping: {
              name: firstname,
              street: address,
              town_city: city,
              county_state: subdivision,
              postal_zip_code: zipcode,
              country: country
            },
            fulfillment: {
              shipping_method: shipping
            },
           
            payment: {
                gateway: 'test_gateway',
                card: {
                  number: '4242424242424242',
                  expiry_month: '02',
                  expiry_year: '24',
                  cvc: '123',
                  postal_zip_code: '94107',
                },
            },
            pay_what_you_want: cart.subtotal.raw
          })
          setorder(incomingOrder);
          history.push("/orderConfirmed");
          console.log(incomingOrder)
        }
    }

    const getShippingCountries = async(tokenID)=>{
        const {countries} =  await commerce.services.localeListShippingCountries(tokenID);
        setCountryList(Object.entries(countries));
     }

     const getShippingSubdivision = async(country) =>{
         const {subdivisions} = await commerce.services.localeListSubdivisions(country)
         setSubdivisionList(Object.entries(subdivisions))
     }
     
    const getShippingOptions = async(token,country,subdivision)=>{
        const response = await commerce.checkout.getShippingOptions(token.id,{
            country: country,
            region: subdivision,
        })
        setShipping(response[0].id)
        setShippingOptions(response)
    }
    
    
    // useeffect used for getting countries 

    useEffect(()=>{
        const generateToke = async(cartID)=>{
            const token = await commerce.checkout.generateToken(cartID , { type: 'cart' })
            setGeneratedToken(token);
            console.log(token)
            getShippingCountries(token.id);
        }

        generateToke(cart?.id);
       
    },[cart])


    // useEffect used for getting subdivision of countries

    useEffect(() => {
        getShippingSubdivision(country)
    }, [country])


    useEffect(() => {
        if (subdivision){ getShippingOptions(generatedToken,country,subdivision)}
    }, [subdivision])



    return (
        <div className="checkout_wrap">
            <h2>Shipping Details</h2>

            <br />
            
            <form onSubmit={e=>handlesubmit(e)} >
                <div className="checkout__form">
                <div className="checkout__column">
                    <label>First Name*</label>
                    <Input required name="firstname" value={firstname} onChange={e=>setFirstname(e.target.value)}/>
                </div>

                <div className="checkout__column">
                    <label>Last Name*</label>
                    <Input required name="lastname" value={lastname} onChange={e=>setLastname(e.target.value)} />
                </div>

                <div className="checkout__column">
                    <label>Address*</label>
                    <Input required name="address" value={address} onChange={e=>setAddress(e.target.value)} />
                </div>


                <div className="checkout__column">
                    <label>Email*</label>
                    <Input required name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>


                <div className="checkout__column">
                    <label>City*</label>
                    <Input required name="city" value={city} onChange={e=>setCity(e.target.value)}/>
                </div>

                <div className="checkout__column">
                    <label>Zipcode*</label>
                    <Input required name="zipcode" value={zipcode} onChange={e=>setZipcode(e.target.value)}/>
                </div>

                <div className="checkout__column">
                    <label>Shipping Country</label>
                    <select name = "country" value={country} onChange={e=>setCountry(e.target.value)}>
                        {
                            countryList?.map(country =>{
                                return <option value = {country[0]} >{country[1]}</option>
                            })
                        }
                        
                    </select>
                </div>

                <div className="checkout__column">
                    <label>Shipping City</label>
                    <select name = "city" value={subdivision} onChange={e=>setSubdivision(e.target.value)}>
                        {
                            subdivisionList?.map(subdivision =>{
                                return <option value={subdivision[0]}>{subdivision[1]}</option>
                            })
                        }
                        
                    </select>
                </div>
                
                <div className="checkout__column">
                    <label>Shipping Options</label>
                    <select name="subdivision" value={shipping} onChange={e=>setShipping(e.target.value)}>
                        {
                            shippingOptions?.map(item=>{
                                return <option value={item.id}>{item.description} {item.price.formatted_with_symbol}</option>
                            })
                        }
                        
                    </select>
                </div>

                <div className="checkout__column">
                    <label> </label>
                    <button>Pay Now</button>
                </div>

        </div>
            </form>
        </div>
    )
}

export default Checkout
