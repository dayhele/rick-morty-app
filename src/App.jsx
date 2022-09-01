import React, { useEffect, useState } from "react";

import GlobalStyle from "./styles/globalStyle";
import * as S from "./styles/styles";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import SearchInput from "./components/Search";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  const getSearchValue = (value) => {
    value = value.toLowerCase();
    setSearchValue(value);
  };

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setError(false);
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => setError(true));
  };

  const fetchFilteredCharacters = () => {
    fetch(`${url}/?name=${searchValue}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setError(false);
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => setError(true));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero>
        <SearchInput
          getSearchValue={getSearchValue}
          doSearch={fetchFilteredCharacters}
        />
        {error ? (
          <NotFound />
        ) : (
          <S.Container>
            {characters.length > 0 &&
              characters?.map((item, index) => (
                <Card character={item} key={index} />
              ))}
          </S.Container>
        )}
        {!error && (
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        )}
      </Hero>
      <Footer />
    </>
  );
}

export default App;
