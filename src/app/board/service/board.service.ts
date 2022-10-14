import { Injectable } from '@angular/core';
import { Tile, TileRow } from '../components/tile/tile.model';

@Injectable()
export class BoardService {
  constructor() {}

  shuffle(ressources: any[]): any[] {
    let currentIndex = ressources.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [ressources[currentIndex], ressources[randomIndex]] = [
        ressources[randomIndex],
        ressources[currentIndex],
      ];
    }

    return ressources;
  }

  setupTiles(tiles: string[], tileNumbers: number[]): Tile[] {
    return tiles.map(tileType => ({
      type: tileType,
      haveBurglar: tileType === 'DESERT',
      ressourceNumber: tileType === 'DESERT' ? 7 : Number(tileNumbers.pop()),
    }));
  }

  splitTiles(tiles: Tile[]): TileRow {
    const rows: TileRow = {
      first: tiles.splice(0, 3),
      second: tiles.splice(0, 4),
      third: tiles.splice(0, 5),
      fourth: tiles.splice(0, 4),
      fifth: tiles.splice(0, 3),
    };

    return rows;
  }
}
