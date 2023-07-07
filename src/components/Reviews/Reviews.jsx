import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import { Author } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setReviews(await getReviews(id));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [id]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <li style={{ listStyle: 'none' }}>
          We dont have any reviews for this movie
        </li>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <Author>Author: {review.author}</Author>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
