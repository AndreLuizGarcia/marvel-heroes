import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import CharacterCard from '../../components/CharacterCard';
import useGetCharacters from '../../hooks/useGetCharacters';
import * as S from './styles';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, isLoading, totalPage } = useGetCharacters(currentPage);
  const charactersList = isLoading ? new Array(16).fill(undefined) : characters;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  return (
    <S.Wrapper>
      <h1>All Marvel Characters</h1>
      <S.CardGroup>
        {charactersList.map((character, index) => (
          <CharacterCard
            key={character?.id || index}
            isLoading={isLoading}
            character={character}
          />
        ))}
      </S.CardGroup>
      <S.PaginationWrapper>
        <ResponsivePagination
          total={totalPage}
          current={currentPage}
          onPageChange={setCurrentPage}
        />
      </S.PaginationWrapper>
    </S.Wrapper>
  );
}

export default App;
