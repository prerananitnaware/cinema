import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import pagenotfound from '../assets/images/pagenotfound.png'
const PageNotFound = () => {
  return (
    <section className='cardsection' style={{minHeight:"60vh"}}>
   
    
    <div className='card' style={{padding:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
    <p style={{fontSize:"2.3rem",marginBottom:"2rem",fontWeight:"800",color:"orange"}}>404 OOPS!</p>
   <div style={{height:"20rem",width:"30rem",margin:"auto",display:"block",borderRadius:"9px",overflow:"hidden"}}>
   <img src={pagenotfound} style={{height:"100%",width:"100%"}}alt="unable to display"/>
   </div>
   
    <Link to="/"><Button>Back To Continue</Button></Link>
   </div>
   </section>
  )
}

export default PageNotFound