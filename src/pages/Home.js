import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Message, Main } from '../ui/UIElements';
import CountryList from '../components/CountryList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const SearchFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Home = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState(null);
  const [filter, setFilter] = useState(null);
  const [dropDownHidden, setDropDownHidden] = useState(true);

  useEffect(() => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha3Code'
    )
      .then(res => res.json())
      .then(
        data => {
          setAllCountries(data);
          setIsLoaded(true);
        },
        err => {
          setIsError(true);
          setIsLoaded(true);
          console.error(err);
        }
      );
  }, []);

  const searchInputHandler = e => {
    const newQuery = e.target.value.trim().toLowerCase();
    if (newQuery.length < 1) {
      setQuery(null);
      return;
    }
    setQuery(newQuery);
  };

  const filterHandler = e => {
    const newFilter = e.target.innerText.toLowerCase();
    if (newFilter === 'no filter') {
      setFilter(null);
      return;
    }
    setFilter(newFilter);
  };

  const filterClickHandler = () => {
    setDropDownHidden(!dropDownHidden);
  };

  return isLoaded ? (
    isError ? (
      <Message>ERROR</Message>
    ) : (
      <Main>
        <SearchFilterBox>
          <SearchBar searchInputHandler={searchInputHandler} />
          <Filter
            filterHandler={filterHandler}
            filter={filter}
            filterClickHandler={filterClickHandler}
            dropDownHidden={dropDownHidden}
          />
        </SearchFilterBox>
        <CountryList
          allCountries={allCountries}
          query={query}
          filter={filter}
        />
      </Main>
    )
  ) : (
    <Message>Loading...</Message>
  );
};

export default Home;
