import React from "react";
import List from "./components/List";
import { cars } from "./data/cars";
import { movies } from "./data/movies";

function App() {
  return (
    <>
      <h2>Cars</h2>
      <List items={cars} />
      <h2>Movies</h2>
      <List items={movies} />
    </>
  );
}

export default App;
