import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://d3nevzfk7ii3be.cloudfront.net/igi/o4OjCNmNeOhvsS1P.standard" alt="phone" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span><br/>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className="rmv-btn-wrapper"
                    onClick={
                        ()=>{props.removeFromCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home