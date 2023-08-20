import React from 'react';
import { MovieSelectedProps } from '../../types/modes';
import { Container, Content, JustifyRow } from '../../../../../components/styles';
import Button from '../../../../../components/Button';
import { Mode } from '../../enum/modes';
import Image from '../../../../../components/Image';
import { MovieImageContainer } from './styles';

const MovieSelected = ({ sessionId, onChangeMode }: MovieSelectedProps) => {
  console.log(sessionId);

  const handleVoteAgain = React.useCallback(() => {
    // todo: update session to allow voting again
    onChangeMode(Mode.MOVIE_GENRE_SELECTION);
  }, [onChangeMode]);

  const movie = {
    id: 5,
    title: 'Toy Story 4',
    imageUrl: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
  };

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