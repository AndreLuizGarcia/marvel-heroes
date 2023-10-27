import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import MarvelService from '../api/MarvelService';
import useMarvelStore from '../store/MarvelStore';

function useGetCharacter(id: string) {
  const { characters, addCharacters } = useMarvelStore();
  const character = characters.filter(
    (character) => character.id.toString() === id
  );

  const { data, isLoading } = useQuery({
    queryKey: [MarvelService.MarvelApiRoutes.CHARACTERS, id],
    queryFn: () => MarvelService.getCharacterById(Number(id)),
    staleTime: Infinity,
    //In case this character is not in the store I get the datafrom the API
    enabled: character.length === 0
  });

  useEffect(() => {
    if (data?.data) {
      addCharacters(data.data.results);
    }
  }, [data]);

  return {
    character: character[0],
    isLoading
  };
}

export default useGetCharacter;
