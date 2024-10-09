import React from 'react';
import Bot from '../components/Bot';
import NavBar from "../components/NavBar";
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Service from '../components/Service';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="text-4xl">
      <div className='z-10 fixed bottom-4 right-7 w-16 h-16 bg-cyan-600 flex items-center justify-center rounded-full sm:right-8 animate-bounce '>
        <Bot />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Skills />
      </div>
      <div>
       <Project/>
      </div>
      <div>
       <Contact/>
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  );
}
