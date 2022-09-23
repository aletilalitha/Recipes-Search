import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
const App = () => {
  const [search, setSearch] = useState("");
  const YOUR_APP_ID = "c0df5f48";
  const YOUR_APP_KEY = "7106c8f0b1c8907eed65021797bbc899";

  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=21&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };

  return (
    <div className="container">
      <center>
        <h2> Recipe Search</h2>
        <form onSubmit={submitHandler}>
          <input
            className="textField"
            type="text"
            value={search}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input type="submit" value="Search" className="button" />
        </form>

        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
