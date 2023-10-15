import React, { useState, useEffect } from "react";
import axios from "axios";


function Sample3() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
}); }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  

  return <div>welcome to the new Hello World... SAMPLE 3 - Getting Data
    <div className="break-words">{JSON.stringify(data)}</div>
  </div>;
}

export default Sample3;
