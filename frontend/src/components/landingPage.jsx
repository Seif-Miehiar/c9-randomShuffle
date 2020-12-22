import React, { useState, useEffect } from 'react';
import axios from 'axios';

//this component for rendering the shuffled student
const LandingPage = () => {

  const [students, setStudents] = useState({ users: [] });
  // const [shuffledStudent, setShuffledStudent] = useState({ oneUser: "" })
  const [random, setRandom] = useState({ randomInt: 0 })
  const [randomUser, setRandomUser] = useState({ user: {} })

  useEffect(() => {

    axios.get(`http://localhost:3000/api/users`)
      .then(res => {
        setStudents({ students: res.data })
      })
      .catch((err) => {
        if (err) throw err
      })

  });
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const onClickRandom = (event) => {
    event.preventDefault();
    const users = students.students.data
    const randomIndex = getRandomInt(users.length)
    setRandom({ randomInt: randomIndex })
    const randomStudent = users[randomIndex]
    setRandomUser({ user: users[randomIndex] })
    // setShuffledStudent({ oneUser: randomStudent })
    // console.log(shuffledStudent)
    console.log(randomUser.user)
  }


  return <div>
    Hello
    <button onClick={onClickRandom}>
      Shuffle
    </button>
    <div>
      Today's Technical Solution is on {randomUser.user.name}
    </div>
    {/* <div key={shuffledStudent._id}>
      Today's Technical Solution is on {shuffledStudent}
    </div> */}
  </div>
}

export default LandingPage