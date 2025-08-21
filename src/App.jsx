"use client";

import { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";

export const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/user")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("API error:", error));
  }, [count]);
  console.log(data);

  return (
    <>
      <button className="text-white" onClick={() => setCount(count + 1)}>
        API call {count}
      </button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
