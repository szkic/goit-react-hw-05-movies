import { Wrapper, Input } from './SearchInput.styled';
import PropTypes from 'prop-types';

export const SearchInput = ({ onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input type="text" name="movieName" required />
      <button type="submit">Search</button>
    </Wrapper>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
