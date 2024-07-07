"use client";

import React, { useState } from 'react';

const FAQ = () => {
  // State for managing expanded/collapsed state of each FAQ item
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Trip Trails?',
      answer:
        'At its core, Trip Trails is more than just a travel app—its your personal travel planner and guide. Our mission is to empower travelers like you to discover new destinations, plan memorable trips, and connect with a global community of explorers.',
      isOpen: false, // Initially collapsed
    },
    {
      question: 'How do I get started with Trip Trails?',
      answer:
        'Getting started is easy! Download the app from the App Store or Google Play, create an account, and follow the onboarding steps to set up your profile and preferences.',
      isOpen: false, // Initially collapsed
    },
    {
      question: 'What are the main features of Trip Trails?',
      answer:
        'Trip Trails offers trip planning tools, community recommendations, budget tracking, and more. It’s designed to simplify your travel planning and enhance your overall experience.',
      isOpen: false, // Initially collapsed
    },
    {
      question: 'Can I use Trip Trails offline?',
      answer:
        'Yes, Trip Trails offers offline access to your plans and itineraries. You can view and edit your trips even without an internet connection.',
      isOpen: false, // Initially collapsed
    },
  ]);

  // Function to toggle FAQ item open/close state
  const toggleFAQ = (index:any) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className='container  mt-10'>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border-b py-4'
            onClick={() => toggleFAQ(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold'>{faq.question}</h2>
              <svg
                className={`w-6 h-6 ${faq.isOpen ? 'transform rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={faq.isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {faq.isOpen && <p className='mt-2 text-gray-600'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
