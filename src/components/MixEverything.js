import React from 'react'
import Midlepart from './middlepart/Midlepart'
import MobileNavBars from './navbars/mobile/MobileNavBars'
import NormalNavBar from './navbars/normal/NormalNavBar'
function Mixeverything() {
  return (
   
       <div>
    <NormalNavBar />
    <MobileNavBars />
     <Midlepart />
   </div>
    
  )
}

export default Mixeverything
