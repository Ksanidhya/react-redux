import React from 'react'
const User = (props)=>{
    const {data}=props
    console.warn(data)
    return(
        <div><br/><br/>
       <p> My Name is Sanidhya.</p>
       <p> Name from props : {data.name} </p>
       <p> Age from props : {data.Age} </p>
       <p> Email from props : {data.email} </p>
        </div>
    )
}

export default User;