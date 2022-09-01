import React, { useEffect, useState } from "react";

import GlobalStyle from "./styles/globalStyle";
import * as S from "./styles/styles";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import SearchInput from "./components/Search";
import Footer from "./components/Footer";



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const getSearchValue = (value) => {
    value = value.toLowerCase();
    setSearchValue(value);
  };

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const fetchFilteredCharacters = () => {
    fetch(`${url}/?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
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
        <SearchInput getSearchValue={getSearchValue} doSearch={fetchFilteredCharacters} />
        <S.Container>
          {characters.map((item, index) => (
            <Card character={item} key={index} />
          ))}
        </S.Container>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </Hero>
      <Footer />
    </>
  );
}

export default App;
