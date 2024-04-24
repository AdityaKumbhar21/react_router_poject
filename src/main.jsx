import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home,AboutUs, ContactUs, User, Github, githubLoader}  from "./components/index.js"


// Creting ruter using createBrowserRouter and nesting in it.

// const router = createBrowserRouter([{
//   path : "/",
//   element: <App />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "aboutus",
//       element: <AboutUs />
//     },
//     {
//       path: "contactus",
//       element: <ContactUs />
//     }

//   ]
// }
// ]);


// creatig rrouter using create Route from elements and adding route tags

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='user/:userid' element={<User />} />
        <Route
        loader = {githubLoader}  /* This is the loader function which is used to load data while the user hovers on the link optimizing the load time*/
        path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* ReactRouterProvider provides us the router and the router is the object where all the route info is stored*/}
  </React.StrictMode>,
)
