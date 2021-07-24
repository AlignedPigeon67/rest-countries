import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Message } from '../ui/UIElements';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 15rem));
  /* align-items: center; */
  gap: 1rem 0.5rem;
`;

const BorderButton = styled(Button)`
  min-width: 8rem;
  width: auto;
  height: auto;
  padding: 1rem 1rem;
  justify-content: center;
`;

const BorderCountries = ({ borderCountries }) => {
  const [allCountries, setAllCountries] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code')
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

  return isLoaded ? (
    isError ? (
      <Message>Error</Message>
    ) : (
      <Container>
        {allCountries
          .filter(country => borderCountries.includes(country.alpha3Code))
          .map(country => (
            <BorderButton
              to={`/${country.alpha3Code.toLowerCase()}`}
              key={country.alpha3Code}
            >
              {country.name}
            </BorderButton>
          ))}
      </Container>
    )
  ) : (
    <Message>Loading...</Message>
  );
};

export default BorderCountries;
