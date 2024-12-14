import React, {useEffect} from 'react';
import Header from '../components/Header';
import Bento from '../components/Bento';

const About = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, [])
  return (
    <div className='font-inter'>
      {/* <Header /> */}
      <div className='md:mx-3 mx-4 my-8'>
      <Bento />
      </div>
    </div>
  );
};

export default About;