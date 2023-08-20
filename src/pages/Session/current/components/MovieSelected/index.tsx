import React from 'react';
import { MovieSelectedProps } from '../../types/modes';
import { Container, Content, JustifyRow } from '../../../../../components/styles';
import Button from '../../../../../components/Button';
import { Mode } from '../../enum/modes';
import Image from '../../../../../components/Image';
import { MovieImageContainer } from './styles';
import { movies } from '../../../../../utils/mock/movies';

const MovieSelected = ({ sessionId, onChangeMode }: MovieSelectedProps) => {
  console.log(sessionId);

  const handleVoteAgain = React.useCallback(() => {
    // todo: update session to allow voting again
    onChangeMode(Mode.MOVIE_GENRE_SELECTION);
  }, [onChangeMode]);

  const movie = movies[4];

  return (
    <Container>
      <Content>
        <h3>Tudo certo? É esse mesmo?</h3>
        <MovieImageContainer>
          <Image src={movie.imageUrl} alt={movie.title} size="large" />
          <span>{movie.title}</span>
        </MovieImageContainer>
        
        <JustifyRow>
          <Button flex={1} buttonType='secondary' onClick={handleVoteAgain}>
            Votar novamente
          </Button>
          <Button flex={1} buttonType='primary' onClick={() => onChangeMode(Mode.STREAM_SELECTION)}>
            É esse mesmo!
          </Button>
        </JustifyRow>
      </Content>
    </Container>
  );
};

export default MovieSelected;