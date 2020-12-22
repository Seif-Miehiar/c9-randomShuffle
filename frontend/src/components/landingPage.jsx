import React, { useState, useEffect } from 'react';
import axios from 'axios';

//this component for rendering the shuffled student
const LandingPage = () => {

  const [data, setData] = useState({ users: [] });

  useEffect(() => {

    axios.get(`http://localhost:3000/api/users`)
      .then(res => {
        setData({ data: res.data })
      })
      .catch((err) => {
        if (err) throw err
      })

  });


  return <div>
    Hello
    <button onClick={() => console.log("test")}>
      Shuffle
    </button>
  </div>
}

export default LandingPage