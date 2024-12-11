import React, {useEffect} from 'react';

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, [])
  return (
    <div>
      <h1>Projects</h1>
      <p>Welcome to our Projects page!</p>
    </div>
  );
};

export default Projects;