import styled from "styled-components";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.element};
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`;

const LightIcon = styled(Brightness3Icon)`
  color: white;
  height: 20px;
  transform: rotateZ(135deg);
`;

const DarkIcon = styled(Brightness2OutlinedIcon)`
  height: 20px;
  transform: rotateZ(135deg);
`;

const ThemeToggle = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ themeToggleHandler, isDarkMode }) => {
  return (
    <Container>
      <Logo>Where in the World?</Logo>
      <ThemeToggle onClick={themeToggleHandler}>
        {isDarkMode ? (
          <LightIcon style={{ fontSize: 18 }} />
        ) : (
          <DarkIcon style={{ fontSize: 18 }} />
        )}
        <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      </ThemeToggle>
    </Container>
  );
};

export default Header;
