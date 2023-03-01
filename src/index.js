import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import my_reducer from './Component/my_reducer';
import { combineReducers } from "redux";
import StudentRedux from './Component/React-redux/StudentRedux';

const rootReducer = combineReducers({
  cart: my_reducer,
  user: StudentRedux
});
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
