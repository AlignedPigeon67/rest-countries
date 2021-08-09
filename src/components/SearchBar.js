import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  width: 30rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  padding: 0 2.6rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.shadow};

  @media (min-width: 700px) {
    width: 40%;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ searchInputHandler }) => {
  return (
    <Container>
      <StyledSearchIcon style={{ fontSize: 22 }} />
      <Input
        onChange={searchInputHandler}
        type="text"
        placeholder="Search for a country..."
      />
    </Container>
  );
};

export default SearchBar;
