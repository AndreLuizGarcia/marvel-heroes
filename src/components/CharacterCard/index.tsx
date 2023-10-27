import { useNavigate } from 'react-router-dom';

import { Classes, Elevation } from '@blueprintjs/core';

import { Character } from '../../types';
import Image from '../Image';
import * as S from './styles';

type CharacterCardProps = {
  isLoading: boolean;
  character?: Character;
};

function CharacterCard({ isLoading, character }: CharacterCardProps) {
  const navigate = useNavigate();

  return (
    <S.Card
      interactive={true}
      elevation={Elevation.ONE}
      onClick={() =>
        !isLoading ? navigate(`/character/${character?.id}`) : null
      }
      role="a"
      about={
        !isLoading ? `Navigate to ${character?.name}'s page` : 'Loading data'
      }
    >
      <Image
        isLoading={isLoading}
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
      />
      <h4 className={isLoading ? Classes.SKELETON : ''}>
        {character?.name || 'No name available'}
      </h4>
      <S.Description className={isLoading ? Classes.SKELETON : ''}>
        {character?.description || 'No description available'}
      </S.Description>
      {!isLoading ? (
        <S.SeeMore
          to={`/character/${character?.id}`}
          about={`Navigate to ${character?.name}'s page`}
        >
          See more
        </S.SeeMore>
      ) : null}
    </S.Card>
  );
}

export default CharacterCard;
