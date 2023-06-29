import { Header, Nav, Link } from './Header.styled';

export const Main = () => {
  return (
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};
