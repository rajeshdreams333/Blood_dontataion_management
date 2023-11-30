import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='d-flex flex-row pt-10 ' style={{backgroundColor:"#808080",height:"400px",marginTop:"20px"}}>
    <div style={{margin:"30px",color:"white",fontWeight:'bold',fontSize:"20px",paddingLeft:"150px"}}>
    <h1 id="button3" >About Us</h1>
    <h1 className='pt-3'><a href="#">Purpose & Network</a></h1>
    <h1 className='pt-3'> <a href="#">History</a></h1>
    <h1 className='pt-3'><a href="#">DEI</a></h1>
    <h1 className='pt-3'><a href="#">Careers</a></h1>
    <h1 className='pt-3'> <a href="#">Leaders</a></h1>
    </div>
    <div style={{margin:"30px",color:"white",fontWeight:'bold',fontSize:"20px" ,paddingLeft:"50px"}}>
    <h1  >NEWS $ EVENTS</h1>
    <h1 className='pt-3'> <a href="#">News</a></h1>
    <h1 className='pt-3'><a href="#">Blog</a></h1>
  
    </div>
    <div style={{margin:"30px",color:"white",fontWeight:'bold',fontSize:"20px",paddingLeft:"50px"}}>
    <h1  >RESOURCES</h1>
    <h1 className='pt-3'><a href="#">FAQ'S</a></h1>
    <h1 className='pt-3'> <a href="#">History</a></h1>
    <h1 className='pt-3'><a href="#">Donor Form</a></h1>
    <h1 className='pt-3'><a href="#">Login Form</a></h1>
    <h1 className='pt-3'> <a href="#">Contact Us</a></h1>
    </div>
  
    <div style={{margin:"30px",color:"white",fontWeight:'bold',fontSize:"20px",paddingLeft:"50px"}}>
    <h1><a href="#">FOLLOW US</a></h1>
    <div className='d-flex flex-row pt-4'>
    <img style={{height:"50px"}} src="assets\5754348.png"/>
    <img style={{height:"50px",marginLeft:"20px"}} src="assets\27-273648_free-social-media-icons-social-media-icons-twitter.png"/>
    <img style={{height:"50px",marginLeft:"20px"}} src="assets\2175195.png"/>
    <img style={{height:"50px",marginLeft:"20px"}} src="assets\4401407.png"/>
  
    </div>
    <h1 className='pt-7'><a href="#">GET OUR APP</a></h1>
    <div className='d-flex flex-row pt-3'>
    <img style={{height:"50px"}} src="assets\download (5).webp"/>
    <img style={{height:"50px",marginLeft:"20px"}} src="assets\download (6).webp"/>
    </div>
    </div>
    
    
    </div>
    <footer className='text-center h-10 bg--300 text-black-500'>
      <p>© 2023 Copyright Bee Data Technology. All right reserved.</p>
    </footer>
    </>
  )
}

export default Footer