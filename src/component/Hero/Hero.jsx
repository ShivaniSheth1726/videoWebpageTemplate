import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_btn from '../../assets/pause_btn.png'
import play_Btn from '../../assets/play_Btn.jpg'
const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
      </div>
      <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause_btn: play_Btn} alt=" " />
        <p>See the Video</p>
      </div>
    </div>
  )
}

export default Hero
