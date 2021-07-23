import { useState, useEffect } from "react";
import styled from "styled-components";
import { Message } from "../ui/UIElements";
import CountryList from "../components/CountryList";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const Home = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setAllCountries(data);
          setIsLoaded(true);
        },
        (err) => {
          setIsError(true);
          setIsLoaded(true);
          console.error(err);
        }
      );
  }, []);

  return isLoaded ? (
    isError ? (
      <Message>ERROR</Message>
    ) : (
      <Main>
        <CountryList allCountries={allCountries} />
      </Main>
    )
  ) : (
    <Message>Loading...</Message>
  );
};

export default Home;
