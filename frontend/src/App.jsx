import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_SERVER;
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default App
