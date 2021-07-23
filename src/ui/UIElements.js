import { Link } from "react-router-dom";
import styled from "styled-components";

export const Message = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  margin-top: 8rem;
`;

export const Unlink = styled(Link)`
  text-decoration: none;
`;
