import React from 'react'

const Button = (props) => {
  return (
    <button style={{width:"15rem",padding:"0.5rem 1rem",borderRadius:"9px",fontSize:"1.2rem", backgroundColor:"black",color:"white",cursor:"pointer",marginTop:"3rem",marginRight:"1rem"}}>{props.children}</button>
 
  )
}

export default Button