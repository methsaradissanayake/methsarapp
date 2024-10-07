import React from 'react';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Bot() {
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className=''>
        <IoChatbubbleEllipsesSharp
          className='text-4xl cursor-pointer'
          onClick={handleContact}
        />
      </div>
    </div>
  );
}
