// Import necessary React hooks
import { useState, useEffect } from "react";

// Define the custom hook 'useFetch' which takes a URL as argument
const useFetch = (url) => {
  // State to hold fetched data
  const [data, setData] = useState(null);
  // Optionally, you might add loading or error states here

  useEffect(() => {
    // Fetch data whenever the URL changes
    fetch(url)
      .then((res) => res.json()) // Parse response JSON
      .then((data) => setData(data)) // Save data into state
      .catch((error) => {
        // Handle errors here (optional)
        console.error("Error fetching data:", error);
      });
  }, [url]); // Dependency array: run effect when URL changes

  // Return the data. You can extend this to return loading and error states if needed
  return [data];
};

export default useFetch;