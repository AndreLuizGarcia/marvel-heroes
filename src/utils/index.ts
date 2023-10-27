import { ITEMS_PER_PAGE } from '../store/MarvelStore';

const returnArrayOfUniques = (arr: Array<unknown>) => {
  const jsonObject = arr.map((item) => JSON.stringify(item));
  const uniqueSet = new Set(jsonObject);
  const uniqueArray = Array.from(uniqueSet).map((item) => JSON.parse(item));

  return uniqueArray;
};

const getOffsetBasedCurrentPage = (currentPage: number) => {
  if (currentPage <= 1) return 0;
  return (currentPage - 1) * ITEMS_PER_PAGE;
};

export { returnArrayOfUniques, getOffsetBasedCurrentPage };
