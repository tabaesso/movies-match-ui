import React from 'react';
import { MovieStreamingsProps } from '../../types/modes';
import { Container, Content } from '../../../../../components/styles';
import Button from '../../../../../components/Button';
import { NotFound, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../../../../services/types/Movie';
import api from '../../../../../services/api';
import { toast } from 'react-toastify';
import LoadingOverlay from '../../../../../components/LoadingOverlay';
import { Streamings } from '../../../../../services/types/Streamings';
import * as _ from 'lodash';
import useMovieTitle from '../../../../../hooks/useMovieTItle';

const MovieStreamings = ({ session }: MovieStreamingsProps) => {
  const { isLoading: isLoadingMovie, error: movieError, data: movieData } = useQuery<Movie>(['movies'], () =>
    api.get(
    `/movies/${session?.movie_id}?mediaType=${session?.category}`
    ).then((res) => res.data), { enabled: !!session?.movie_id || !session?.category }
  );

  const { isLoading: isLoadingStreamings, error: streamingsError, data: streamingsData } = useQuery<Streamings>(['streamings'], () =>
    api.get(
    `/movies/${session?.movie_id}/streamings?mediaType=${session?.category}`
    ).then((res) => res.data), { enabled: !!session?.movie_id }
  );

  console.log(streamingsData);

  React.useEffect(() => {
    if (!movieError) return;

    toast.error('Erro ao carregar título escolhido');
  }, [movieError]);

  React.useEffect(() => {
    if (!streamingsError) return;

    toast.error('Erro ao carregar serviços de streaming');
  }, [streamingsError]);

  const navigate = useNavigate();

  const streamingServices = React.useMemo(() => {
    const streamings = streamingsData?.map((streaming) => streaming.provider_name || undefined);

    return _.compact(streamings);
  }, [streamingsData]);

  const movieTitle = useMovieTitle(movieData);

  return (
    <Container>
      <LoadingOverlay isLoading={isLoadingMovie || isLoadingStreamings} />
      <Content>
        <h4>
          Serviços de streaming que o título&nbsp;
          <Title>{movieTitle}</Title>
          &nbsp;está disponível:
        </h4>
        {streamingServices.length === 0 ? (
          <NotFound>Nenhum serviço de streaming disponível no Brasil para este título</NotFound>
        ) : (
          <ul>
            {streamingServices.map((service) => <li>{service}</li>)}
          </ul>
        )}
        <Button buttonType='primary' onClick={() => navigate('/home')}>Voltar para a página inicial</Button>
      </Content>
    </Container>
  );
};

export default MovieStreamings;