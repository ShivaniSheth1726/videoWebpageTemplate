
import { useEffect, useState } from "react" 
import Background from "./component/Background/Background";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
const App = () => {
  let heroData=[
    {text1:"Dive Into",text2:"What you love"},
    {text1:"Indulge",text2:"Your Passion"},
    {text1:"Give Into",text2:"Your Passion"},
  ];
  const [heroCount,setHeroCount]= useState(0);
  const [playStatus,setPlayStatus]= useState(true); //if we write true instead of false the background video will play
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}/>
     
    </div>
  )
}

export default App


