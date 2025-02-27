import React from 'react'
import HeadingTitle from '../../components/Feature/HeadingTitle'
import Scale from '../../components/Feature/Scale'
import Working from '../../components/Feature/Working'
import SixImg from '../../components/Feature/SixImg'
import FeatureCard from '../../components/Feature/FeatureCard'
import group1 from "../../components/images/bitcoingroup.png";
import group2 from "../../components/images/peng.png";
import group3 from "../../components/images/look.png";
import group4 from "../../components/images/look2.png";
import BannerCard from '../../components/FeatureBanner/BannerCard'
import FirstComp from '../../components/Chart/FirstComp'
import SecondComp from '../../components/Chart/SecondComp'
import TopNewsComp from './TopNewsComp'
import NewsBanner from '../../components/ToNews/NewsBanner'
import Question from '../../components/ToNews/Question'
import Mobile from '../../components/ToNews/Mobile'
import MobText from '../../components/ToNews/MobText'
import Footer from '../../components/ToNews/Footer'
import CopyRight from '../../components/ToNews/CopyRight'
import ChatBot from '../../components/ChatBoot/ChatBot';
function FeatureComp() {
  return (
    <div>
    <div className='container mt-[14rem] relative'>
      <HeadingTitle/>
      <Scale/>
      <Working/>
      <SixImg/>
      <div id='Feature' className="Container p-3 mt-[5rem] mx-auto">
       <h1 className="text-center text-[40px] md:text-[50px] lg:text-[55px] font-bold opacity-50">
         Experience the Difference
       </h1>
        <div className="flex flex-wrap justify-center items-center gap-[4rem] mt-10">
  <FeatureCard
    title="Mobile Payment Made Easy"
    description="A cryptocurrency like bitcoin is a virtual currency traded peer-to-peer on a blockchain, independent of centralized authorities like banks and governments."
    image={group1}
  />
  <FeatureCard
    title="Diverse Mining Portfolio"
    description="Choose from a wide range of target assets for trading and over 10 major mining algorithms that cut across 4 mineable cryptocurrencies"
    image={group2}
  />
  <FeatureCard
    title="Protect the Identity"
    description="Utilising top-tier security practices, our platform is able to handle cyberattacks and protect your assets."
    image={group3}
  />
  <FeatureCard
    title="Secure and Private"
    description="We value the privacy of our users, so we strive to keep collected user data to a minimum level."
    image={group4}
  />
       </div>
      </div>
      <div id='BannerBg' className='lg:w-[1200px] md:w-[700px]  mx-auto border'>
      <BannerCard/>
      </div>
      <div id='chart' className='lg:w-[1200px] md:w-[700px] md:mt-[12rem] mx-auto flex lg:flex-row flex-col lg:space-x-[5rem] lg:ps-10'>
        <FirstComp/>
        <p className='lg:flex hidden h-[700px] justify-center items-center w-[2px] opacity-50 bg-white'></p>
        <SecondComp/>
      </div>
      <TopNewsComp/>
      <NewsBanner/>
      <div className='lg:w-[1200px] md:w-[700px] w-full mx-auto md:mt-[8rem]  mt-[4rem]'> 
        <h1 className='text-center text-[50px] font-bold opacity-50'>Ask Quick Question</h1>
        <Question 
        title=" How do I open an account?" 
        Parha="Our account registration process is as easy as clicking a 'Get Started' button anywhere on our website. They will all take you to the account registration page, or your Wealthnest Global if you have already logged in." />
        <Question
         title=" How do I open an account?" 
         Parha="Our account registration process is as easy as clicking a 'Get Started' button anywhere on our website. They will all take you to the account registration page, or your Wealthnest Global if you have already logged in." />
        <Question 
       title=" How do I open an account?" 
       Parha="Our account registration process is as easy as clicking a 'Get Started' button anywhere on our website. They will all take you to the account registration page, or your Wealthnest Global if you have already logged in." />
          <Question 
       title=" How do I open an account?" 
       Parha="Our account registration process is as easy as clicking a 'Get Started' button anywhere on our website. They will all take you to the account registration page, or your Wealthnest Global if you have already logged in." />
          <Question 
       title=" How do I open an account?" 
       Parha="Our account registration process is as easy as clicking a 'Get Started' button anywhere on our website. They will all take you to the account registration page, or your Wealthnest Global if you have already logged in." />
      </div>
      <div 
        id="MobileBG" 
         className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center space-y-10 lg:justify-around flex-wrap items-center py-10 mx-auto md:mt-[8rem] mt-[4rem] px-4">
         <MobText />
          <Mobile />
         </div>
    </div>
      <div className='md:mt-[10rem] mt-10 max-w-[1200px] mx-auto'>
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-50">
              Have Any Questions?</h1>
       <div className='lg:mt-[15rem] mt-[4rem]'>
       <Footer/>
        </div>
        <CopyRight/>
        <ChatBot/>
        </div>
        </div>
  )
}

export default FeatureComp
