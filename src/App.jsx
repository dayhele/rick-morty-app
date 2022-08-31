import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  //utilizando o useEffect o componente irá renderizar uma unica vez

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero>
        {characters.map((item, index) => (
          <Card character={item} key={index} />
        ))}
      </Hero>
    </>
  );
}

export default App;
