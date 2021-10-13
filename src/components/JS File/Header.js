import React from 'react'
import '../Css file/header.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useHistory,Link } from 'react-router-dom';

function Header({cart,categoryList}) {

    const history = useHistory()

    const home = () =>{
        history.push('/')
    }

    const Men = () => {
        history.push('/men')
    }

    const Women = () => {
        history.push('/women')
    }
    const kids = () => {
        history.push('/kids')
    }

    const hliving = () => {
        history.push('/hliving')
    }

    const beauty = () => {
        history.push('/beauty')
    }

    const profile = () =>{
        history.push('/profile')
    }

    const bag = () =>{
        history.push('/bag')
    }

    const wishlist = () =>{
        history.push('/wishlist')
    }

    return (
        <div className="main">

        <div className = "main__left">
            <img onClick ={home}
                style ={{height : "80px",  padding:'20px', marginLeft:'5px'}}
                src ="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_930,h_620/https://aartisto.com/wp-content/uploads/2020/11/myntra-930x620.png"
                alt="logo" />
            <div className="hl_component">
            {
                categoryList?.map((category) => {
                    return <h3 key = {category.id}>
                        <Link style ={{textDecoration:'none', color:'grey', fontWeight:'350', fontSize:'18px'}} to={`/category/${category.slug}`}>
                            {category.name}
                        </Link>
                        </h3>
                })
            }
            </div>
        </div>
        <div className="header__mid">
        </div>
        <div className="header__right">
            <div className="inputtag">
                <SearchOutlinedIcon style ={{fontSize:'25px' , color: 'grey'}} />
                <input type="text" placeholder="Search for products, brands and more" />
            </div>

            <div className="hr_components" >
                <span>
                <PersonOutlineOutlinedIcon onClick = {profile} style ={{fontSize:'30px' , cursor:'pointer'}} />
                Profile
                </span>

                <span>
                <FavoriteBorderOutlinedIcon onClick = {wishlist} style ={{fontSize:'30px' , cursor:'pointer'}} />Wishlist
                </span>
                <span>
                <ShoppingBasketOutlinedIcon onClick = {bag} style ={{fontSize:'30px' , cursor:'pointer'}} />Bag
                </span>
                <h6 style = {{display:'flex', alignItems:"center"}}>
                    {cart?.total_items}
                </h6>
            </div>

        </div>

       </div>

    )
}

export default Header
