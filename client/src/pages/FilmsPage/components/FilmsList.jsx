import { memo } from 'react';
import FilmCard from 'pages/FilmsPage/components/FilmCard';
import Message from 'components/Message';
import { useLoadFilms } from 'hooks/films';
import { FullSpinner } from 'styles/app';

const FilmsList = () => {
  const { data: films, isLoading } = useLoadFilms();

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <div className="ui four cards">
      {films.length === 0 ? (
        <Message>No films yet in our database</Message>
      ) : (
        films.map((film) => <FilmCard film={film} key={film._id} />)
      )}
    </div>
  );
};

FilmsList.defaultProps = {
  films: [],
};

export default memo(FilmsList);
