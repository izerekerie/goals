import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
// import goalStore from './store/store'
import {createStore} from "redux"
import goalReducer from './reducers/goalReducer'
const goalStore=createStore(goalReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={goalStore}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
