import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([{ firstName: "", lastName: "" }]);

  const USER_API = "https://randomuser.me/api/?results=50";

  const fetchData = async (url) => {
    const res = await axios.get(url);
    const data = res.data.results;
    const obj = await data.map((d) => {
      const name = {
        firstName: d.name.first,
        lastName: d.name.last,
      };
      return name;
    });
    setData(obj);
  };

  useEffect(() => {
    fetchData(USER_API);
  }, []);

  const array = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "orange",
    "red",
  ];

  return (
    <div className="App">
      <div>
        {" "}
        {data.map((item, i) => {
          let idx = i / 5;
          const backgroundColor = array[Math.trunc(idx)];
          console.log(Math.trunc(0.2));
          return (
            <div key={i + Math.random()} style={{ backgroundColor }}>
              First Name: {item.firstName} <br /> Last Name:{item.lastName}
              <hr />
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}
