import React from 'react'
import './Card.css'
import { useSpring, animated } from 'react-spring';
function Card() {
  const propsCard1 = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
  });

  const propsCard2 = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500, delay: 200 }, // Add a delay for the second card
  });

  const propsCard3 = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500, delay: 400 }, // Add a delay for the third card
  });

  return (
  
    <div className="features_home">
    <animated.div className='card1' style={propsCard1}>
      <div className="icon1">
        <img className="icon11" src='https://cdn-icons-png.freepik.com/256/11769/11769778.png?ga=GA1.1.1041603509.1707722046&' alt='icon'/>
      </div>
      <div className="content1">
        <p className='para'>Find Your Future Accomodation</p>
        <p className='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      </animated.div>

    <animated.div className='card1' style={propsCard2}>
      <div className="icon1">
        <img className="icon11" src='https://cdn-icons-png.freepik.com/256/5501/5501360.png?ga=GA1.1.1041603509.1707722046&' alt='icon'/>
      </div>
      <div className="content1">
        <p className='para'>Systematic Owener Revenue Model</p>
        <p className='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      </animated.div>

    <animated.div className='card1' style={propsCard3}>
      <div className="icon1">
        <img className="icon11" src='https://cdn-icons-png.freepik.com/256/3230/3230438.png?ga=GA1.1.1041603509.1707722046&' alt='icon' />
      </div>
      <div className="content1">
        <p className='para'>Amazing Ammenities</p>
        <p className='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      </animated.div>




  </div>
  

    



  )
}

export default Card