import {useRef} from 'react'

import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import  '../App.css'
const Header = () => {
 const refval=useRef();
 const navigate=useNavigate();
 function submitHandler(e)
 {
  e.preventDefault();
  const searchval=refval.current.value;
  navigate(`/search?q=${searchval}`);
  refval.current.value="";
  console.log("value",refval);
 }
  return (
    <header>
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className='logos' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src={logo} alt="unable to display logo" style={{height:"3rem",width:"3rem"}}/>
          <p>Cinemate</p>
        </div>
        <ul style={{display:"flex",alignItems:"center",justifyContent:"center",listStyleType:"none",gap:"1rem"}}>
         <li><NavLink to="/"  style={{textDecoration:"none"}}  end>Home</NavLink></li>
         <li><NavLink to="movie/popular"  style={{textDecoration:"none"}} >Popular</NavLink></li>
         <li><NavLink to="movie/toprated"  style={{textDecoration:"none"}} >Top Rated</NavLink></li>
         <li><NavLink to="movie/upcoming"  style={{textDecoration:"none"}} >Upcoming</NavLink></li>
        </ul>
        <div>
          <form onSubmit={submitHandler}>
          <svg style={{ width: "1.5rem", height: "1.5rem", color: "gray",position:"absolute",
    marginTop: "4px",top: "1.5rem",marginLeft: "4px",
    right: "14rem"}} 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
<input type="text" placeholder='search' name="search" id="search" ref={refval} style={{padding:"0.5rem 2rem",borderRadius: "10px",outline:"none",border:"1px solid gray"}}></input>
          </form>
        
        </div>
      </nav>
      <hr/>
    </header>
    
  )
}

export default Header