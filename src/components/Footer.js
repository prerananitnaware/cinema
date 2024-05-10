import React from 'react'

const Footer = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 2rem",fontSize:"14px"}}>
      <p>© 2030 Cinemate. All Rights Reserved.</p>
      <ul>
      <ul style={{display:"flex",alignItems:"center",justifyContent:"center",listStyleType:"none",gap:"1rem"}}>
         <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} >Instagram</a></li>
         <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"  style={{textDecoration:"none"}} >Linkeden</a></li>
         <li><a href="https://twitter.com" target="_blank" rel="noreferrer"  style={{textDecoration:"none"}} >Twitter</a></li>
         <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} >Youtube</a></li>
        </ul>
       
      </ul>
    </div>
  )
}

export default Footer;