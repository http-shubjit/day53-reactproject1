import React from 'react'
import "../Styles/home.scss"
import vg from "../assets/2.webp"
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram, AiFillYoutube } from  "react-icons/ai"
const Home = () => {
  return (
    <>
<div className='home' id='home'>
<main>
<h1> shubjit</h1>
<p>i Am Here For You</p>
</main>
</div>
<div className="home2">
  <img src={vg} alt="Grphics" />
<div> 
  <p>
i am a professional coder and i know u came for a reason 
  </p>
</div>
</div>
<div className="home3" id='about'>
  <div>
  <h1>who am i</h1>
  <p>i am profesional coder with good knowldeg in coding</p>
  </div>
</div>

<div className="home4" id='brands'>
  <div>
    <h1>Brands</h1>
    <article>
      <div style={{animationDelay:"0.3s"}}> 
      <AiFillGoogleCircle/>
      <p>Google</p>
     </div>

     <div style={{animationDelay:"0.5s"}}> 
      <AiFillAmazonCircle/>
      <p>Amazon</p>
     </div>

     <div style={{animationDelay:"1s"}}> 
      <AiFillYoutube/>
      <p>Youtube</p>
     </div>

     <div style={{animationDelay:"1.2s"}}> 
      <AiFillInstagram/>
      <p>Google</p>
     </div>

    </article>
  </div>
</div>
    </>
  )
}

export default Home