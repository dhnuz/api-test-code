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

  const array = ["red", "green", "blue", "yellow", "orange"];

  return (
    <div className="App">
      <div>
        {" "}
        {data.map((item, i) => {
          const idx = Math.floor(i / 5) % 5;
          const backgroundColor = array[idx];
          return (
            <div
              key={i + Math.random()}
              style={{ backgroundColor, margin: "1px 0px" }}
            >
              First Name: {item.firstName} <br /> Last Name:{item.lastName}
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}
