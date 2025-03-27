import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './Layout'



export { Home, About, Contact, Layout, StrictMode, createRoot, createBrowserRouter ,RouterProvider}