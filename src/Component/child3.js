import React,{useContext,useState} from 'react'
import StudentContext from '../Context/StudentContext'


function Child3() {

    const num = useContext(StudentContext);

    const string = useContext(StudentContext);


    const [number]=useState(num.students[2])

    const [st]=useState(string.students[3])

  return (
    <div>
        <h1>Number example with Context Api</h1>
        <h1>number is now {number}</h1>
        <h1>string is now {st}</h1>
    </div>
  )
}

export default Child3