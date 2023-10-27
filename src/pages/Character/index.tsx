import { useParams } from 'react-router-dom';

import { Classes } from '@blueprintjs/core';

import Image from '../../components/Image';
import useGetCharacter from '../../hooks/useGetCharacter';
import * as S from './styles';

function Character() {
  const { id } = useParams();
  const { character, isLoading } = useGetCharacter(id!);

  return (
    <S.Wrapper>
      <h1 className={isLoading ? Classes.SKELETON : ''}>
        {character?.name || 'No name available'}
      </h1>
      <Image
        isLoading={isLoading}
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
      />
      <h2 className={isLoading ? Classes.SKELETON : ''}>Description</h2>
      <p className={isLoading ? Classes.SKELETON : ''}>
        {character?.description || 'No description available'}
      </p>
      <h2 className={isLoading ? Classes.SKELETON : ''}>Comics</h2>
      <ul>
        {character?.comics.items.length === 0
          ? 'No comics available'
          : character?.comics?.items.map((comic) => (
              <li key={comic?.name}>{comic?.name}</li>
            ))}
      </ul>
    </S.Wrapper>
  );
}

export default Character;
