import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Profiles from './pages/Profiles.tsx'
import Profile from './pages/Profile.tsx'
import FetchUsingUseEffect from './pages/FetchUsingUseEffect.tsx'

const router = createBrowserRouter([
  {
      path:'/',
      element: <Home/>,
      errorElement: <NotFoundPage />
  },
  {
    path:'/profiles',
    element: <Profiles />, 
    children: [
      {
        path:'/profiles/:profileId',
        element: <Profile />
      }
    ]
  },
  {
    path:'/fetch-useeffect',
    element: <FetchUsingUseEffect />
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
