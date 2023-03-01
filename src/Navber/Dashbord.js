import React, { useState } from 'react';
import Parent from '../Component/Parent';
import StudentContext from '../Context/StudentContext';
import { Link } from "react-router-dom";
import reactlog from "../Image/Reactlogo.png";

function Dashboard() {

    const [UserName]=useState("imran");

    const [stname]= useState([
       {name: 'tomboy',age: 17},
       {name: 'Ash',age: 20},
       {name: 'shari',age: 25},
       {name: 'kamran',age: 30},
       {name: 'humza',age: 28}
     ]);
   
     const [questions] = useState([
       {
         questionText: "What was the old name of PIA?",
         answerOptions: [
           "Orient Airways",
           "New Air Dublin",
           "Madrid AirLine",
           "Paris Line",
         ],
         answer: "Orient Airways",
       },
       {
         questionText:
           "What official name was given to Pakistan in 1956 constitution?",
         answerOptions: [
           "New Pakistan",
           "Old Pakistan",
           "Pakistan Moment",
           "Islamic Republic",
         ],
         answer: "Islamic Republic",
       },
       {
         questionText: "How many days are in September",
         answerOptions: ["28", "29", "30", "31"],
         answer: "28" 
       },
       {
         questionText: "Which are the popular rivers of Baluchistan?",
         answerOptions: ["1", "64", "742", "0"],
         answer: "742",
       },
       {
         questionText: "Which of these is not an planet?",
         answerOptions: ["Earth", "Jupitor", "Mars", "Florida"],
         answer: "Florida",
       },
       {
         questionText: "Question 6?",
         answerOptions: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
         answer: "Answer 2",
       },
       {
         questionText: "Question 7?",
         answerOptions: ["Answer 11", "Answer 12", "Answer 13", "Answer 14"],
         answer: "Answer 13",
       },
       {
         questionText: "Question 8?",
         answerOptions: ["Answer 21", "Answer 22", "Answer 23", "Answer 24"],
         answer: "Answer 24",
       },
       {
         questionText: "Question 9?",
         answerOptions: ["Answer 31", "Answer 32", "Answer 33", "Answer 34"],
         answer: "Answer 31",
       },
       {
         questionText: "Question 10?",
         answerOptions: ["Answer 41", "Answer 42", "Answer 43", "Answer 44"],
         answer: "Answer 43",
       },
     ]);
   
     const [claessNum]=useState([6,7,8,9,10]);
   
     const [num]=useState(1);
   
     const [st]=useState("string is by pass contextapi");
   
     let students = [stname,claessNum,num,st,questions,UserName];
   
  return (
    <div className="container-fluid p-0">
        <div className="row me-0">
            <div className="col-md-2 col-12 p-0 navbar-collapse text-white"
    id="navbarNav">
            <nav className="navbar Dash_bord">
      <div className="container-fluid">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-white text-center pt-4">
      <Link to="/" className="navbar-brand text-white reactlog" href="#">
          <img src={reactlog} alt='react-log' />
        </Link>
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fetchApi" className="nav-link">
                fetchApi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/axiosAPi" className="nav-link">
                axiosAPi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContextApiObject" className="nav-link">
                ContextApiObject
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContextApiarray" className="nav-link">
                ContextApiarray
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContextApiNumber" className="nav-link">
                ContextApiNumber
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Quiz_app" className="nav-link">
                Quiz_app
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Image_Crop" className="nav-link">
                Image Crop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Todo_List" className="nav-link">
                Todo List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link">
                Add to cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/StudentData" className="nav-link">
                Student Data
              </Link>
            </li>
          </ul>
      </div>
    </nav>
            </div>
            <div className="col-md-10 col-12 p-0 mt-5">
                    <StudentContext.Provider value={{students}}>
    <Parent />
    </StudentContext.Provider>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
