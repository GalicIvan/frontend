"use client";

import { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";

export const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/chuck")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("API error:", error));
  }, [count]);
  console.log(data);

  return (
    <>
      <img src={data.icon} alt="Chuck Picture" />
      <button className="text-blue-500" onClick={() => setCount(count + 1)}>
        Get Chuck Joke
      </button>
      <h2 className="scroll-m-20 pb-6 text-3xl font-semibold tracking-tight mt-2">
        {data.joke}
      </h2>
    </>
  );
};
