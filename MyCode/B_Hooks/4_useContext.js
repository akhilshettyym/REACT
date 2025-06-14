// File: App.js (or index.js if you're not using a bundler with App.js setup)

// React hooks and functions
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

// 1. Create the context
const UserContext = createContext();

// 2. Top-level component holding the global user state
function Component1() {
  // This state will be shared across deeply nested components
  const [user, setUser] = useState("Jesse Hall");

  return (
    // Provide the user context value to all child components
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

// Component2 does NOT need the user state but passes to Component3
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

// Component3 does NOT need the user state but passes to Component4
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

// Component4 does NOT need the user state but passes to Component5
function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

// 3. Component5 uses useContext to access user data directly
function Component5() {
  // Grab the user value from context without prop drilling
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// 4. Render the root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);