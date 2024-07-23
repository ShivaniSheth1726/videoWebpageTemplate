import './Background.css'
import video1 from '../../assets/video1.mp4'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image1 from '../../assets/image1.jpg'
const Background = ({playStatus,heroCount}) => {
 if(playStatus){
    return(
      <video className='background' autoPlay loop muted>
         <source src={video1} type='video/mp4' />
      </video>
    )
 }
 else if(heroCount===0)
   {
    return(<img src={image4} className='background fade-in' alt=''/>)
 }
 else if(heroCount===1)
   {
    return(<img src={image5} className='background fade-in' alt=''/>)
 }
 else if(heroCount===2)
   {
    return(<img src={image1} className='background fade-in' alt=''/>)
 }
}

export default Background
