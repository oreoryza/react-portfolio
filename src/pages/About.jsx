import React, {useEffect} from 'react';
import Header from '../components/Header';
import Bento from '../components/Bento';

const About = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FEE032';
  }, [])
  return (
    <div className='font-inter'>
      <Header />
      <div className='mx-3 my-4'>
      <Bento />
      </div>
    </div>
  );
};

export default About;