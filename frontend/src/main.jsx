import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from '../store.js'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './screen/Home.jsx'
import Login from './screen/Login.jsx'
import Register from './screen/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
