import { useState } from 'react'
import './App.css'
import Image from './components/Image'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Navbar from './components/Navbar/Navbar';



function App() {
 
const[name,setName]=useState();
const[email,setEmail]=useState();
const[text,setText]=useState();
  
  const Onsubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <div className='conatiner'>
      <div className='main'>
      <div className='contact'>
      <Navbar/>
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
          <div className='hero'>
          <div className='form'>
        <div className='btn'>
          <button className='button' > <MdMessage/>VIA SUPPORT CHAT</button>
          <button className='button'> <IoCall/>VIA CALL</button>
        </div>
        <div id='email1'>
          <button id='email'><MdEmail />VIA EMAIL FORM</button>
        </div>
        <form action="">
          <input id='name' type="text" placeholder='Enter your name' />
          <div>
          <input type="email" id="emailInput" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <input type="text" id='text' placeholder='Enter text here' />
          </div>
          <div>
            <button id='submit' onSubmit={Onsubmit}>Submit</button>
          </div>
        </form>
        
      </div>
      <Image></Image>

      </div>
      <div>{name+" " +email+ " "+text}</div>
      </div>
      
      </div>
    </div>
  )
}

export default App
