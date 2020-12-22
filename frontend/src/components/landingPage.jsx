import React, { useState, useEffect } from 'react';

//this component for rendering the shuffled student
const LandingPage = () => {

  const [count, setCount] = useState(0);



  return <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
}

export default LandingPage