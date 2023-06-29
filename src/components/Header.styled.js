import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 2px 8px 0px rgba(66, 68, 90, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 40px;
  padding: 20px 0;
`;

export const Link = styled(NavLink)`
  font - size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    cursor: pointer;
    color: orange;
  }
`;
