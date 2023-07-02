import { Wrapper, Input } from './SearchInput.styled';

export const SearchInput = ({ onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input type="text" name="movieName" required />
      <button type="submit">Search</button>
    </Wrapper>
  );
};
