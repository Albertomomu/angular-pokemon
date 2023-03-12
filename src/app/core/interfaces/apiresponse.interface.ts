import { IPokemon } from "./pokemon.interface";

export interface IApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}