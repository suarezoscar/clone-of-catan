export interface Tile {
  ressourceNumber: number;
  type: string;
  haveBurglar: boolean;
}

export type TileRow = {
  first: Tile[];
  second: Tile[];
  third: Tile[];
  fourth: Tile[];
  fifth: Tile[];
};
