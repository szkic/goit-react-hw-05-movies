import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setCast(await getCast(id));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [id]);

  return (
    <ul>
      {cast.length === 0 ? (
        <p>We dont have cast information for this movie</p>
      ) : (
        cast.map(el => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
              }
              width={200}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
