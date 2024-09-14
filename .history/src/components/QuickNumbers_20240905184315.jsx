import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { FaUserAlt, FaPassport, FaPlaneDeparture, FaCheckCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const data = [
  {
    icon: <FaUserAlt className="h-12 w-12 text-white mb-2" />,
    number: 9999,
    label: 'Student Visas'
  },
  {
    icon: <FaPassport className="h-12 w-12 text-white mb-2" />,
    number: 4999,
    label: 'Work Permits'
  },
  {
    icon: <FaPlaneDeparture className="h-12 w-12 text-white mb-2" />,
    number: 19999,
    label: 'Tourist Visas'
  },
  {
    icon: <FaCheckCircle className="h-12 w-12 text-white mb-2" />,
    number: 99.99,
    label: 'Success Ratio (%)',
    isDecimal: true, // To handle percentages
  }
];

function QuickNumbers() {
  const [showCounts, setShowCounts] = useState(false);
  const quickNumbersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCounts(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the component is visible
    );

    if (quickNumbersRef.current) {
      observer.observe(quickNumbersRef.current);
    }

    return () => {
      if (quickNumbersRef.current) {
        observer.unobserve(quickNumbersRef.current);
      }
    };
  }, []);

  return (
    <div ref={quickNumbersRef} className="bg-blue-950 py-8 w-full">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-white pt-5 mb-8">QUICK NUMBERS</h2>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-24 mt-5 pb-5">
        {data.map((item, index) => (
          <div key={index} className="text-center text-white pt-3 w-full sm:w-auto flex-1 sm:flex-none">
            <div className="quicknumber flex flex-col justify-center items-center">
              <div className="icon mb-2">{item.icon}</div>
              <h3 className="text-2xl sm:text-4xl font-bold">
                {showCounts && (
                  <CountUp 
                    end={item.number} 
                    duration={7} 
                    decimals={item.isDecimal ? 2 : 0} // Handle decimals for success ratio
                    suffix={item.isDecimal ? "%" : "+"} // Adds a percentage or plus sign
                  />
                )}
              </h3>
              <p className="mt-2 text-base sm:text-xl">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickNumbers;
