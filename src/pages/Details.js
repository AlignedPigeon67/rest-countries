import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Message, Main } from '../ui/UIElements';
import styled from 'styled-components';

const Image = styled.img`
  width: 31.5rem;
  height: 23rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

const Key = styled.span`
  font-weight: 600;
`;

const Value = styled.span`
  font-weight: 300;
`;

const Details = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${id.toLowerCase()}`)
      .then(res => res.json())
      .then(
        data => {
          setCountry(data);
          setIsLoaded(true);
        },
        err => {
          setIsError(true);
          setIsLoaded(true);
          console.error(err);
        }
      );
  }, [id]);

  return isLoaded ? (
    isError ? (
      <Message>ERROR</Message>
    ) : (
      <Main>
        <Image src={country.flag} alt={`${country.demonym} flag`} />
        <InfoContainer>
          <h1>{country.name}</h1>
          <span>
            <p>
              <Key>Native Name: </Key> <Value>{country.nativeName}</Value>
            </p>
            <p>
              <Key>Population: </Key>{' '}
              <Value>{country.population.toLocaleString()}</Value>
            </p>
            <p>
              <Key>Region: </Key> <Value>{country.region}</Value>
            </p>
            <p>
              <Key>Sub Region: </Key> <Value>{country.subregion}</Value>
            </p>
            <p>
              <Key>Capital: </Key> <Value>{country.capital}</Value>
            </p>
          </span>
          <span>
            <p>
              <Key>Top Level Domain: </Key>{' '}
              <Value>{country.topLevelDomain[0]}</Value>
            </p>
            <p>
              <Key>Currencies: </Key>{' '}
              <Value>
                {country.currencies.map(currency => currency.name).join(', ')}
              </Value>
            </p>
            <p>
              <Key>Languages: </Key>{' '}
              <Value>{country.languages.map(lan => lan.name).join(', ')}</Value>
            </p>
          </span>
        </InfoContainer>
      </Main>
    )
  ) : (
    <Message>Loading...</Message>
  );
};

export default Details;
