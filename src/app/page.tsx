import React from 'react'
import AboutMe from '@/components/custom/AboutMe'
import Projects from '@/components/custom/Projects';
import Contact from '@/components/custom/Contact';

export default function Home() {
  return (
    <main className='bg-main'>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </main>
  );
}
