import { Main, Error } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Main>
      <Error>404</Error>
      <p>Sorry, we couldn't find that page :(</p>
    </Main>
  );
};
