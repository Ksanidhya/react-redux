import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
                <img src="https://loading.io/s/icon/4tk536.svg" alt="cart"/>
            </div>
        </div>
    )
}

export default Header