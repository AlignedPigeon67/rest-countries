import styled from "styled-components";
import CountryItem from "./CountryItem";

const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`;

const CountryList = ({ allCountries }) => {
  return (
    <List>
      {allCountries.map((country) => (
        <CountryItem country={country} />
      ))}
    </List>
  );
};

export default CountryList;
