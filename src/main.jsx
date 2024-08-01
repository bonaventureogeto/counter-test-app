import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RickAndMorty from './components/RickandMorty.jsx'
import Calculator from './components/Calculator.jsx'
import Counter from './components/Counter.jsx'
import DisplayData from './components/DisplayData.jsx'
import CharacterDetails from './components/CharacterDetails.jsx'


// create routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/calculator',
    element: <Calculator />
  },
  {
    path: '/display-data',
    element: <DisplayData />
  },
  {
    path: '/rickandmorty',
    element: <RickAndMorty />
  },
  {
    path: '/character/:id',
    element: <CharacterDetails />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
