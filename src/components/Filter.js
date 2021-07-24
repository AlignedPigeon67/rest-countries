import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  padding: 0 2.4rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.shadow};

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0.4rem;
  width: 100%;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
`;

const DropDown = styled.div`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
  position: absolute;
  width: 20rem;
  height: 17.5rem;
  margin-top: 13.5rem;
  padding: 1.6rem 2.6rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  z-index: 2;

  > * {
    &:first-child {
      opacity: 0.5;
    }
  }
`;

const Arrow = styled(ExpandMoreIcon)``;

const Filter = ({
  filterHandler,
  filter,
  filterClickHandler,
  dropDownHidden,
}) => {
  const filterKeys = [
    'no filter',
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  return (
    <>
      <Container onClick={filterClickHandler}>
        <Text>{filter ? filter : 'Filter by Region'}</Text>
        <Arrow />
      </Container>
      <DropDown isHidden={dropDownHidden}>
        {filterKeys.map(filterKey => (
          <Text
            key={filterKey}
            onClick={e => {
              filterHandler(e);
              filterClickHandler();
            }}
          >
            {filterKey}
          </Text>
        ))}
      </DropDown>
    </>
  );
};

export default Filter;
