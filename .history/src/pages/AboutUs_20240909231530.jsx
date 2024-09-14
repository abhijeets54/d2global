import React from 'react'
import { Container, CustomImageList } from '../components'
import QuickNumbers from '../components/QuickNumbers'
import About from '../components/About'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import Events from '../components/Events'



function AboutUs() {
  return (<>
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
          <div ref={aboutSectionRef} className="flex items-center justify-center bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Sliding Text Content */}
        <div
          className={`transform transition-transform duration-1000 ${
            slideIn ? 'translate-x-0' : '-translate-x-full'
          } mt-8 md:mt-0 md:mr-10 max-w-lg text-left md:text-left`}
        >
          <h2 className="text-3xl md:text-4xl  font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
          <p className="text-base md:text-lg text-gray-700">
          With over years of experience in the immigration industry, [Director/Founder/CEO's Name] founded D2 Global with a vision to simplify the immigration process and help individuals achieve their dreams of living, working, and studying abroad. Under his leadership, the company has successfully guided thousands of clients through the complexities of visas, work permits, and permanent residency applications.
          </p>
          
          {/* Read More Button */}
          <button 
            onClick={handleReadMore}
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Read More
          </button>
        </div>

        {/* Sliding Image */}
        <div
          className={`transform transition-transform duration-1000 ${
            slideIn ? 'translate-x-0' : 'translate-x-full'
          } mt-8 md:mt-0`}
        >
          <img
            src="https://via.placeholder.com/300x300" 
            alt="Profile"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover mx-auto md:mx-0"
          />
        </div>

      </div>
    </div>
          <QuickNumbers />
          <Events/>
          <WhatPeopleAreSaying />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default AboutUs
