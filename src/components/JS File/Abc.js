import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import Shoppingcard from './Shoppingcard'

function Abc() {
    return (
        <>  
            {/* Upper Header part of the fromt page */}
            <Header />

            {/* Banner after the website */}
            <Banner />

            {/* festival Cards of the website */}
            <Card/>

            {/* shopping Card */}
            <Shoppingcard/>

        </>
    )
}

export default Abc
