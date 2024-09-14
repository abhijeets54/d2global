import React, { useEffect, useState, useRef } from 'react';
import { Container, CustomImageList } from '../components';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Events from '../components/Events';

const AboutUs = () => {
  const [slideIn, setSlideIn] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlideIn(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full text-center">
        <Container>
          <div className="flex flex-wrap">

            {/* About Us Section - Copied from About.jsx */}
            <div
              ref={aboutSectionRef}
              className="w-full flex items-center justify-center bg-gray-100 py-12 md:py-16"
            >
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                {/* Sliding Text Content */}
                <div
                  className={`transform transition-transform duration-1000 ${
                    slideIn ? 'translate-x-0' : '-translate-x-full'
                  } mt-8 md:mt-0 md:mr-10 max-w-lg text-left md:text-left`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
                  <p className="text-base md:text-lg text-gray-700">
                    With years of experience in the immigration industry, [Director/Founder/CEO's Name] founded D2 Global with a vision to simplify the immigration process and help individuals achieve their dreams of living, working, and studying abroad. Under his leadership, the company has successfully guided thousands of clients through the complexities of visas, work permits, and permanent residency applications.
                  </p>
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

            {/* Keeping the other components intact */}
            <
            <QuickNumbers />
            <Events />
            <WhatPeopleAreSaying />
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
