import { IPokemon } from "./pokemon.interface";

export interface ITypeResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}