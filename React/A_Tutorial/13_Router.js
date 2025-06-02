import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

// Layout component with navigation links and an Outlet for nested routes
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* Navigation links to internal routes */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Renders matched child route components */}
      <Outlet />
    </>
  );
};

// Home page component
const Home = () => {
  return <h1>Home Page</h1>;
};

// Blogs page component
const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

// Contact page component
const Contact = () => {
  return <h1>Contact Me</h1>;
};

// Fallback for undefined routes (404 page)
const NoPage = () => {
  return <h1>404 - Page Not Found</h1>;
};

// Main App component with routing setup
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route with nested routes for pages */}
        <Route path="/" element={<Layout />}>
          {/* Default route for '/' */}
          <Route index element={<Home />} />
          {/* '/blogs' route */}
          <Route path="blogs" element={<Blogs />} />
          {/* '/contact' route */}
          <Route path="contact" element={<Contact />} />
          {/* Catch-all route for undefined URLs */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Render the app into the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);