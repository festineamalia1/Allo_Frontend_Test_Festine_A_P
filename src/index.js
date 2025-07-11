import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/myreducer";
import { BrowserRouter } from "react-router-dom";

 const store = createStore( reducer, applyMiddleware(thunk));

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
<Provider store={store}>
   <React.StrictMode>
    
     <App />
   
   </React.StrictMode>
</Provider>

 );

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,

//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
