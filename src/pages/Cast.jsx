import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCast(id)
      .then(response => setCast(response))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
            width={200}
            alt={el.name}
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};
