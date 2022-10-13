import React from 'react'
import {MdArrowRightAlt} from 'react-icons/md';
import {BiRightArrowCircle} from 'react-icons/bi';
import Footer from '../Footer/Footer';
import Navbar2 from "../../Navigation/Navbar/Navbar2";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ExpertContent = () => {
  const [showNavTab,setshowNavTab] = useState (false)
  const navigate = useNavigate();

  return (
    <>
      <Navbar2 mentorNavinfo={true} showNavTab={showNavTab} setshowNavTab= {setshowNavTab}/>
      <div className='expert'>
        <section className="registerEdi app">
        <div className="top">

          <div className="registerEdi-left">
            <div className="registerEdi-onImage">Create, Post <br/> Earn, Recognize</div>
            <div className="registerEdi-onText"><p>Write on diverse topics as an bite sized article related to Career Perspective & Insights for Students & Freshers</p></div>       
            <div><button className='writebtn' onClick={()=> {navigate("/RegisterEdi")}}>Sign Up</button></div>
          </div>
          <div className='right'>
            <img src={require("./vector.jpg")} alt=''/>
          </div>
          </div>
        </section>

        <section className="bottom bottom1">
          <div>
            <div className="bottom_text">
              <p>If you are a Career expert, mentor or someone with deep domain expertise on Career <br/>Perspective & Insights - Join us Today as an expert & Create informative and helpful<br/> contents on diverse set of Topics related to Career.</p>
            </div>
          </div>
        </section>

        <section className="bottom bottom2">
          <div>
            <h2>What you will be writing/creating as a Career expert</h2>
          </div>
          <div className="section-content"> 
            <ul className="section-content-li">
              <li><BiRightArrowCircle className='list-arrow'/>You will be writing/creating a bite sized article, infographic informations about different <br/>   Career Perspective & Insights on diverse set of Topics.</li>
              <li><BiRightArrowCircle className='list-arrow'/>You will act as an experienced Career expert that will make users aware & knowledgeable<br/> about the Topics that you will write.</li>
            </ul>
          </div>
        </section>
        <section className="bottom bottom3">
          <div>
            <h2>Benefits & Advantages</h2>
          </div>
          <div className="section-content">
            <ul className="section-content-li">
              <li><BiRightArrowCircle className='list-arrow'/>You will reach thousands of users through your content</li>
              <li><BiRightArrowCircle className='list-arrow'/>You would get rewarded in many form</li>
              <li><BiRightArrowCircle className='list-arrow'/>You would be followed, advised & recognised, all at one place !</li>
              <li><BiRightArrowCircle className='list-arrow'/>At the end, you would be helping someone to achieve a great career via your contents</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ExpertContent