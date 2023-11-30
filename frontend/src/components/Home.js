import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div>
    <div style={{textAlign:"end"}} className='mt-3'>
        <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true"  style={{color:"black",fontSize:"20px",border:"none" }}>
        Donate
        </Dropdown.Toggle>

        <Dropdown.Menu  style={{backgroundColor:"#4db8ff"}}>
          <Dropdown.Item href="#danger"  >Donate Blood</Dropdown.Item>
          <Dropdown.Item href="#">About Us</Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-inside"  style={{color:"black",fontSize:"20px",border:"none"}}>
          Join Us
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:"#00bfff"}}>
          <Dropdown.Item href="#button1">Host a Blood drive</Dropdown.Item>
          <Dropdown.Item href="#">Volunteer</Dropdown.Item>
          <Dropdown.Item href="#">Give Blood</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-outside"  style={{color:"black",fontSize:"20px",border:"none"}}>
        Eligibility 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:"#00bfff"}}>
          <Dropdown.Item href="#button2">Who are Eligible</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-false"  style={{color:"black",fontSize:"20px",border:"none",marginRight:"30px"}}>
          Support Us
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:"#00bfff"}}>
          <Dropdown.Item href="#button3">Follow Us</Dropdown.Item>
          <Dropdown.Item href="#">Facebook</Dropdown.Item>
          <Dropdown.Item href="#">Twitter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>




      <div className='d-flex flex-row justify-center '>
      <div style={{margin:"50px",width:"550px"}}>
      <h1 id="danger" style={{fontSize:"70px",fontWeight:"bold",fontFamily:"roboto",marginTop:"30px"}}>Donate <span style={{color:"red",margin:"10px"}}>Blood</span> SaveLife</h1>
     <p style={{fontSize:"20px",fontWeight:"bold",textAlign:"justify",paddingTop:"10px",width:"500px"}}>Blood donation is a most important social service to the humankind. As being a human, we must donate blood to save others life.</p>
      <button style={{fontWeight:"bold",fontSize:"25px",marginTop:"30px",backgroundColor:"#FF8000",height:"40px",width:"180px",borderRadius:"10px"}}>Donate Now</button>
     <p  style={{fontSize:"15px",paddingTop:"20px"}}>For More Information <a href='#' style={{color:"blue",fontSize:"17px"}}>Learn more</a></p>
      </div>
      <div>
      <div style={{margin:"50px",width:"550px"}}>
      <img src="assets\hand-holding-blood-bag-type-donation_1308-110794.avif"/> 
      
      </div>
      </div>
      
      </div>


      <div className="d-flex flex-row justify-center ">
<div  style={{height:"340px",margin:"20px"}}>
  <div style={{backgroundColor:"	#008080",height:"280px",width:"300px",borderRadius:"18px"}}>
    <img src="assets\blood-donation-design-vector-5488318-removebg-preview.png" style={{height:"110px", paddingLeft:"110px"}}/>

<h1  style={{textAlign:"center",marginTop:"-10px",fontWeight:"bold",fontSize:"20px",color:"	#800000"}}>DONATE BLOOD</h1>

 <p  style={{fontSize:"13px" ,textAlign:"justify",width:"270px",paddingLeft:"30px",paddingTop:"14px",color:"white"}}>Donate blood and save lives.
Instead of giving your blood to mosquitoes, give it to someone who needs it.
One bag of blood can bring back one from the dead.
The bond of blood is stronger than anything.
A blood bag in time saves a life.</p>
  </div>
</div>

<div  style={{height:"340px" ,margin:"20px"}}>
  <div style={{backgroundColor:"	#008080",height:"280px",width:"300px",borderRadius:"18px"}}>
    <img src="assets\BDMS_logo4.png" style={{height:"110px", paddingLeft:"110px"}}/>

<h1 style={{textAlign:"center",marginTop:"-10px",fontWeight:"bold",fontSize:"20px",color:"	#800000"}}>How to Donate Blood</h1>

 <p  style={{fontSize:"13px" ,textAlign:"justify",width:"270px",paddingLeft:"30px",paddingTop:"14px",color:"white"}}>
 Individuals must meet specific criteria, such as age, weight, and health status, to be eligible to donate blood. The donation process typically involves a health screening, the actual donation, and a brief recovery period. Information on how often individuals can donate blood safel.</p>
  </div>
</div>



<div  style={{height:"340px" ,margin:"20px"}}>
  <div style={{backgroundColor:"	#008080",height:"280px",width:"300px",borderRadius:"18px"}}>
    <img src="assets\BDMS_logo2.png" style={{height:"110px", paddingLeft:"110px"}}/>

<h1 style={{textAlign:"center",marginTop:"-10px",fontWeight:"bold",fontSize:"20px",color:"	#800000"}}>Importance of Blood Donation</h1>

 <p  style={{fontSize:"13px",width:"270px",paddingTop:"14px",color:"white",marginLeft:"20px"}}>
 Blood transfusions are crucial in various medical treatments, surgeries, and emergencies, saving countless lives. Voluntary blood donation fosters a sense of community involvement and support for those in need.  Maintaining an adequate blood supply is essential for responding to emergencies.</p>
  </div>
</div>


<div  style={{height:"340px" ,margin:"20px"}}>
  <div style={{backgroundColor:"	#008080",height:"280px",width:"300px",borderRadius:"18px"}}>
    <img src="assets\img1 (1).png" style={{height:"110px", paddingLeft:"110px"}}/>

<h1 style={{textAlign:"center",marginTop:"-10px",fontWeight:"bold",fontSize:"20px",color:"	#800000"}}>Features Of Donation</h1>

 <p  style={{fontSize:"13px" ,textAlign:"justify",width:"270px",paddingLeft:"30px",paddingTop:"14px",color:"white"}}>
 Automated reminders via email or text messages to encourage regular donors to schedule their next donation. Pre-donation health assessments to ensure donors meet eligibility criteria and are in good health before donating blood. Information about the importance of blood donation, the donation process, and the impact of donations on saving lives.</p>
  </div>
</div>
</div>




<div className='d-flex flex-row '>
<div>
    <img src="assets\phlebotomy_technician_header_1.webp"/>
</div>
<div style={{width:"700px " ,marginLeft:"100px"}} >

    <div className='d-flex flex-row pt-16'>
    <div style={{backgroundColor:"#FC600A",width:"80px",height:"80px",borderRadius:"40px",display:"grid",placeItems:"center"}}>
    <img  src="assets\download (1).webp"/>
    </div>
    <div>
    <h1 id="button1" style={{fontSize:"20px",fontWeight:"bold",paddingLeft:"20px",fontFamily:"roboto"}}>Give Blood</h1>
    <p style={{fontSize:"17px",paddingLeft:"20px",fontFamily:"roboto",width:"500px"}}>When You give blood with vitalant,you save lives in your community and beyond</p>
    
    </div>
    
    </div>
    <div className='d-flex flex-row pt-10'>
    <div style={{backgroundColor:"#FC600A",width:"80px",height:"80px",borderRadius:"40px",display:"grid",placeItems:"center"}}>
    <img  src="assets\download (2).webp"/>
    </div>
    <div>
    <h1 style={{fontSize:"20px",fontWeight:"bold",paddingLeft:"20px",fontFamily:"roboto"}}>Host a Blood drive</h1>
    <p style={{fontSize:"17px",paddingLeft:"20px",fontFamily:"roboto",width:"500px"}}>Save even more lives by hosting a blood drive and inviting other people to donate blood.</p>
    
    </div>
    
    </div>
    <div className='d-flex flex-row pt-10'>
    <div style={{backgroundColor:"#FC600A",width:"80px",height:"80px",borderRadius:"40px",display:"grid",placeItems:"center"}}>
    <img  src="assets\download (3).webp"/>
    </div>
    <div>
    <h1 style={{fontSize:"20px",fontWeight:"bold",paddingLeft:"20px",fontFamily:"roboto"}}>Volunteer</h1>
    <p style={{fontSize:"17px",paddingLeft:"20px",fontFamily:"roboto",width:"500px"}}>You can support hospital patients by providing assistance in various areas of Vitalant's mission.</p>
    
    </div>
    
    </div>
    <div className='d-flex flex-row pt-10'>
    <div style={{backgroundColor:"#FC600A",width:"80px",height:"80px",borderRadius:"40px",display:"grid",placeItems:"center"}}>
    <img  src="assets\download (4).webp"/>
    </div>
    <div>
    <h1 style={{fontSize:"20px",fontWeight:"bold",paddingLeft:"20px",fontFamily:"roboto"}}>Join Our Team</h1>
    <p style={{fontSize:"17px",paddingLeft:"20px",fontFamily:"roboto",width:"500px"}}>Discover how rewarding it is to make an impact on people's lives by becoming part of the Vitalant team</p>
    <a href="#" id="Home">
<button style={{fontWeight:"bold",color:"white",fontSize:"25px",marginTop:"30px",backgroundColor:"#347C98",height:"40px",width:"180px",borderRadius:"10px"}}>Go Back</button>
</a>
<a >
<button  style={{fontWeight:"bold",color:"white",fontSize:"25px",marginTop:"30px",backgroundColor:"#347C98",height:"40px",width:"180px",borderRadius:"10px",marginLeft:"36px"}}>Go next</button>
</a>
    </div>
    
    </div>
    
    
</div>



    </div>
    <h1 id="button2" style={{fontSize:"30px",fontWeight:"bold",paddingTop:"50px",textAlign:"center"}}> Eligibility Criteria for Blood Donation</h1>

    <div className='d-flex flex-row ' >
<div>
    <h1 style={{fontSize:"30px",fontWeight:"bold",paddingTop:"30px",margin:"40px"}}>Eligibility Requirements</h1>
    <p style={{width:"600px",marginLeft:"40px"}}>You may be wondering if you can donate blood. Donating blood is safe and easy to do, but there are 
       few basic requirements to donate blood. If you're in good health and meet the general
       eligibility blood donation requirements, then you are likely able to give blood. </p>
    
      <h1  style={{fontSize:"30px",fontWeight:"bold",margin:"40px"}}>Who are Eligible to Donate Blood?</h1>
      <p style={{width:"600px",marginLeft:"40px"}}>Any healthy adult, both male and female, can donate every three months
Good health of the donor must be fully ensured. The universally accepted criteria for donor selection are:</p>
<ul style={{fontSize:"18px",marginLeft:"40px",paddingTop:"20px",fontWeight:"bold"}}>
<li> Age between 18 and 60 years</li>
<li>Haemoglobin - not less than 12.5 g/Dl</li>
<li>Pulse - between 50 and 100/minute with no irregularities</li>
<li>Blood Pressure -Systolic 100-180 mm Hg and Diastolic 50 - 100 mm Hg</li>
<li>Temperature - Normal (oral temperature not exceeding 37.50C)</li>
</ul>

</div>
<img src="assets\GettyImages-627290560.jpg" style={{paddingTop:"130px",height:"550px",width:"600px",marginLeft:"80px"}}/>
</div>
<a href="#" id="Home1" >
<button style={{fontWeight:"bold",color:"white",fontSize:"25px",marginTop:"30px",backgroundColor:"#347C98",height:"40px",width:"180px",borderRadius:"10px",marginLeft:"36px"}}>Go Back</button>

</a>

    </div>
  );
}

export default Home;
