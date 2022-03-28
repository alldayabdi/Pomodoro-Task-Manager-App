import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className='infoPage'>
      <h1>Technologies Used</h1>
        <p>JavaScript</p>
        <p>React</p>
        <p>Redux</p>
        <p>SQL</p>
        <p>Node.js</p>
        <p>CSS</p>
        <p>Material UI</p>

      
    </div>
  );
}

export default InfoPage;
