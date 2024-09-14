import React , { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CustomImageList } from '../components'
import QuickNumbers from '../components/QuickNumbers'
import About from '../components/About'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import Events from '../components/Events'
import Choose from '../components/Choose';
import Register from '../components/Register'
import People from '../components/People'
import About from '../components/About';



function AboutUs() {
  return (<>
    
     
         <People/>
          <Choose/>
          <QuickNumbers />
          <Events/>
          <WhatPeopleAreSaying /> 
          <Register/>
          
        
      
  
    </>
  )
}

export default AboutUs
