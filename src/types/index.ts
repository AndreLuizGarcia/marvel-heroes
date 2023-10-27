export type MarvelAPIResult = {
  code: number;
  etag: string;
  status: string;
  data: Data;
};

export type Data = {
  count: number;
  limit: number;
  offset: number;
  results: Array<Character>;
  total: number;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Item = {
  resourceURI: string;
  name: string;
  type?: string;
};

export type Series = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Events = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Url = {
  type: string;
  url: string;
};
