import { Unlink } from '../ui/UIElements';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-rows: 16rem 18rem;
  width: 26.5rem;
  height: 34rem;
  background-color: ${({ theme }) => theme.element};
  border-radius: 1rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.shadow};
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 160px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  padding: 2rem 2rem;
`;

const InfoText = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;

  & > p {
    margin: 0.4rem 0;
  }
`;

const CountryItem = ({ country }) => {
  return (
    <Unlink to={`/${country.alpha3Code.toLowerCase()}`}>
      <Card>
        <Image src={country.flag} />
        <InfoContainer>
          <h1>{country.name}</h1>
          <InfoText>
            <p>
              <strong>Population: </strong>
              {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Capital: </strong>
              {country.capital}
            </p>
          </InfoText>
        </InfoContainer>
      </Card>
    </Unlink>
  );
};

export default CountryItem;
