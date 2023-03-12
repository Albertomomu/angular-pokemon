export interface IPokemon {
  name: string;
  url: string;
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      }
    }
  };
  abilities: {
    ability: {
      name: string,
      url: string
    }
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[];
}