import { create } from 'zustand';

import { Character } from '../types';
import { returnArrayOfUniques } from '../utils';

type MarvelStore = {
  characters: Array<Character>;
  addCharacters: (characters: Array<Character>) => void;
  totalPage: number;
  setTotalPage: (totalPage: number) => void;
};

export const ITEMS_PER_PAGE = 20;

const useMarvelStore = create<MarvelStore>((set) => ({
  characters: [],
  addCharacters: (characters) =>
    set((state) => {
      const uniques = returnArrayOfUniques([
        ...state.characters,
        ...characters
      ]);
      return {
        ...state,
        characters: uniques
      };
    }),
  totalPage: 0,
  setTotalPage: (totalPage) =>
    set((state) => {
      return {
        ...state,
        totalPage
      };
    })
}));

export default useMarvelStore;
