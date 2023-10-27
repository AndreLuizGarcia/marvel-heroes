import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import MarvelService from '../api/MarvelService';
import useMarvelStore, { ITEMS_PER_PAGE } from '../store/MarvelStore';

function useGetCharacters(currentPage: number) {
  const { addCharacters, totalPage, setTotalPage } = useMarvelStore();

  const { data, isLoading } = useQuery({
    queryKey: [MarvelService.MarvelApiRoutes.CHARACTERS, currentPage],
    queryFn: () => MarvelService.getAllCharacters(currentPage),
    staleTime: Infinity
  });

  useEffect(() => {
    if (data?.data) {
      addCharacters(data.data.results);
      setTotalPage(Math.ceil(data.data.total / ITEMS_PER_PAGE));
    }
  }, [data]);

  return {
    characters: data?.data?.results || [],
    isLoading,
    totalPage
  };
}

export default useGetCharacters;
