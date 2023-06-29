import css from './Movies.module.css';

export const Movies = () => {
  return (
    <div className={css.searchInput}>
      <input type="text" className={css.search} />
      <button type="submit">Search</button>
    </div>
  );
};
