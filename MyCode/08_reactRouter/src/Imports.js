// Imports of Layout
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Imports of main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import User from './components/User/User';
import Github from './components/Github/Github';
import { githubInfoLoader } from './components/Github/Github';



export { React, Header, Footer, Outlet, Home, About, Contact, Layout, StrictMode, createRoot, 
        createBrowserRouter, RouterProvider, Route, User, Github, githubInfoLoader }


        

