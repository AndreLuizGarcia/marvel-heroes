import { MarvelAPIResult } from '../types';
import { getOffsetBasedCurrentPage } from '../utils';
import { getApiMarvelAuth } from './apiAuth';

getApiMarvelAuth();

const baseURL = 'https://gateway.marvel.com/v1/public';

enum MarvelApiRoutes {
  CHARACTERS = 'characters'
}

const getAllCharacters = async (
  currentPage: number
): Promise<MarvelAPIResult> => {
  return fetch(
    `${baseURL}/${
      MarvelApiRoutes.CHARACTERS
    }?offset=${getOffsetBasedCurrentPage(currentPage)}`
  ).then((res) => res.json());
};

const getCharacterById = async (
  characterId: number
): Promise<MarvelAPIResult> => {
  return fetch(`${baseURL}/${MarvelApiRoutes.CHARACTERS}/${characterId}?`).then(
    (res) => res.json()
  );
};

export default {
  getAllCharacters,
  MarvelApiRoutes,
  getCharacterById
};
