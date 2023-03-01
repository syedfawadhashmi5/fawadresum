import React from 'react';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './child3';
import ApiIntegration from './FakeApiIntegration/ApiIntegration';
import Apiwithfetch from './FakeApiIntegration/Apiwithfetch'
import { Routes, Route } from "react-router-dom";
import Quizapp from './Quiz-App/Quiz_app';
import TodoList from './contextApi_todo_list/TodoList';
import Products from "./AddToCart/Products";
import Cart from "./AddToCart/Cart";
import Home from './Home/Home';
import StudentData from './AddStudentData/StudentData';


function parent() {
  return (
   <div className='my-5  text-center'>
         <Routes path="/parent">
         <Route path="/" element={<Home />} />
        <Route path="fetchApi" element={<Apiwithfetch />} />
        <Route path='axiosAPi' element={<ApiIntegration />} />
        <Route path='ContextApiObject' element={<Child />} />
        <Route path='ContextApiarray' element={<Child2 />} />
        <Route path='ContextApiNumber' element={<Child3 />} />
        <Route path='Quiz_app' element={<Quizapp />} />
        <Route path='Todo_List' element={<TodoList />} />
        <Route path='Products' element={<Products />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='StudentData' element={<StudentData />} />
    </Routes>
    
   </div>
  )
}

export default parent