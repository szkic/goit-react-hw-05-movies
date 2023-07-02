import { Main, Error } from './NotFound.styled';

const NotFound = () => {
  return (
    <Main>
      <Error>404</Error>
      <p>Sorry, we couldn't find that page :(</p>
    </Main>
  );
};

export default NotFound;
