import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter} from 'react-router-dom'
import store from "./redux/store.js";
import {Home, LoginScreen, RegScreen, ProfileScreen} from './pages/index'
import { Provider } from "react-redux";



const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App />}>     
         <Route index element={<Home/>}/>
         <Route path="/login" element={<LoginScreen/>}/>
         <Route path="/register" element={<RegScreen/>}/>
         <Route path="/profile" element={<ProfileScreen/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);