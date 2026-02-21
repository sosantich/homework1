export interface Item {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  quote: string;
  author: string;
}

export interface CharacterApi {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  origin: { name: string };
}

export interface CharactersResponse {
  results: CharacterApi[];
}

export interface DummyQuote {
  id: number;
  quote: string;
  author: string;
}

export interface DummyQuotesResponse {
  quotes: DummyQuote[];
}
