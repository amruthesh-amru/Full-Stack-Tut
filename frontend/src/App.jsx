import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        console.log("data 🧀🧀", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h1>{joke.id}</h1>
            <h2>{joke.joke}</h2>
            <h3>{joke.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
