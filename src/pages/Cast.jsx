import { useParams } from 'react-router-dom';

export const Cast = ({ cast }) => {
  console.log(cast);
  const { id } = useParams();
  console.log(id);

  return <h2>Hello Cast</h2>;
};
