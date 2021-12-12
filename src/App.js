import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/JS File/Header';
import Card from './components/JS File/Card'
import Banner from './components/JS File/Banner'
import Shoppingcard from './components/JS File/Shoppingcard';
import Men from './components/Sections/Men'
import Women from './components/Sections/Women'
import Kids from './components/Sections/Kids'
import Hliving from './components/Sections/Hliving'
import Beauty from './components/Sections/Beauty'
import Profile from './components/Sections/Profile'
import Bag from './components/Sections/Bag'
import Wishlist from './components/Sections/Wishlist'
import commerce from './lib/commerce.js'
import {useEffect, useState} from 'react'
import Checkout from './components/JS File/Checkout';
import Orderconfirmed from './components/JS File/Orderconfirmed';
import Login from './Login'
import {firebase} from './firebase'



function App() {


  // user signin 


  const [orderdetail, setOrderdetail] = useState({})

  const setorder = (order) =>{
    setOrderdetail(order)
  }

  

  const [productList, setProductList] = useState([])

  const fetchProducts = async() =>{
    const response = await commerce.products.list();
    setProductList(response.data)
    console.log(response)
  }

 

  const [cart, setCart] = useState([])

// add items into cart
  const addToCart = async(prodId, qty) => {
    const response = await commerce.cart.add(prodId,qty)
    setCart(response.cart)
    // console.log('h1',response)

  }

  // remove item from cart
  const removeFromCart=async(prodId)=>{
    const responsce = await commerce.cart.remove(prodId);
    setCart(responsce.cart);
  }

  // fetch items in cart
  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve())
  }

  const [categoryList, setCategoryList] = useState([])

  // fetch with category
    const fetchCateogries = async() => {
    const response = await commerce.categories.list()
    setCategoryList(response.data);
  }

  const [productByCategory, setProductByCategory] = useState([])
    // get products by category
  const fetchProductByCategory = async(category) =>{
    const response = await commerce.products.list({
      category_slug:[category]
    })
    setProductByCategory(response.data)
    // console.log(response)
  }

  // const [userData, setUserData] = useState()

  // const udata = () =>{
  //   const response = 
  // }
  


  useEffect(() => {
    fetchCateogries()
    fetchProducts()
    fetchCart()
    fetchProductByCategory()
    
  }, [])

  const [usersignedin, setUsersignedin] = useState(true)
  firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      
      return setUsersignedin(true)
    }

    setUsersignedin(false)
  })

  if(usersignedin === true){
      return (
    
    <Router>
     <>
        <Header cart = {cart} categoryList = {categoryList} />
        <Switch>

            {/* Men section */}
            {/* <Route path="/men">
              <Men productList = {productList} addToCart = {addToCart} />
            </Route> */}

            {/* category with slug */}
            <Route path="/category/:slug">
              <Men productList = {productByCategory}  addToCart = {addToCart} fetchProductByCategory = {fetchProductByCategory}/>
            </Route>

            <Route path="/checkout">
              <Checkout cart = {cart} setorder = {setorder}  />
            </Route>

            <Route path ="/orderConfirmed">
              <Orderconfirmed orderdetail = {orderdetail}/>
            </Route>

            {/* profile */}
            <Route path="/profile">
              <Profile />
            </Route>

            {/* Cart or Bag */}
            <Route path="/bag" >
              <Bag cart = {cart} removeFromCart = {removeFromCart}/>
            </Route>

            {/* wishlist */}
            <Route path="/wishlist">
              <Wishlist />
            </Route>

            <Route exact path="/" >
              <Banner />
              <Card />
              <Shoppingcard productList = {productList} addToCart = {addToCart}/>
            </Route>

          </Switch>
        </> 
      
    </Router>
    )
  
} else{
  return(

    <Router>
    <Switch>
      <Route path = "/">
          <Login/>
      </Route>
    </Switch>
  </Router>
  
  )
  
}


  
};

export default App;
