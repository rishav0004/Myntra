import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import commerce from '../../lib/commerce'
import {Link} from 'react-router-dom'



function Shopcard({ img, link }) {

    
  const [categoryList, setCategoryList] = useState([])

  // fetch with category
    const fetchCateogries = async() => {
    const response = await commerce.categories.list()
    setCategoryList(response.data);
  }

    const [productList, setProductList] = useState([])

    const fetchProducts = async() => {
        const response = await commerce.products.list()
        setProductList(response.data);
        console.log(response)

    }

    useEffect(() => {
        
        fetchProducts()

    }, [])

    return (
        <>
        {/* <div className="hl_component">
            {
                categoryList?.map((category) => {
                    return <h3 key = {category.id}>
                        <Link style ={{textDecoration:'none', color:'grey', fontWeight:'350', fontSize:'18px'}} to={`/category/${category.slug}`}>
                            {category.name}
                        </Link>
                    <h3>hello world</h3>
                    </h3>
            })
        }
        </div> */}

            <img onClick={link} style={{ width: '200px', margin: '34px', cursor: 'pointer' }} src={img} alt="images" />
        </>
    )
}

export default Shopcard
