import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Message, Main, Button } from '../ui/UIElements';
import styled from 'styled-components';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BorderCountries from '../components/BorderCountries';

const DetailsMain = styled(Main)`
  align-items: center;
`;

const Image = styled.img`
  width: 31.5rem;
  /* height: 23rem; */
  object-fit: contain;

  @media (min-width: 1024px) {
    flex: 0.5;
    margin-top: 2.5rem;
    width: 40%;
    max-width: 56rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    flex: 0.5;
  }
`;

const Key = styled.span`
  font-weight: 600;
`;

const Value = styled.span`
  font-weight: 300;
`;

const SubHeading = styled.h3`
  font-weight: 600;
  opacity: ${({ borders }) => (borders.length < 1 ? '0.25' : '1')};
`;

const ImgInfoContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    gap: 5rem;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 16rem;
  }
`;

const BackButton = styled(Button)`
  align-self: flex-start;
`;

const Details = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/alpha/${id.toLowerCase()}?fields=alpha3Code;flag;name;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`
    )
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
      <DetailsMain>
        <BackButton to="/">
          <KeyboardBackspaceIcon style={{ fontSize: 20 }} />
          <p>Back</p>
        </BackButton>
        <ImgInfoContainer>
          <Image src={country.flag} alt={`${country.demonym} flag`} />
          <InfoContainer>
            <h1>{country.name}</h1>
            <InfoList>
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
                    {country.currencies
                      .map(currency => currency.name)
                      .join(', ')}
                  </Value>
                </p>
                <p>
                  <Key>Languages: </Key>{' '}
                  <Value>
                    {country.languages.map(lan => lan.name).join(', ')}
                  </Value>
                </p>
              </span>
            </InfoList>
            <SubHeading borders={country.borders}>Border Countries:</SubHeading>
            <BorderCountries borderCountries={country.borders} />
          </InfoContainer>
        </ImgInfoContainer>
      </DetailsMain>
    )
  ) : (
    <Message>Loading...</Message>
  );
};

export default Details;
