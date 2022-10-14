const BASE_PATH = '/assets/icons';

export const gameIcon = {
  SHEEP: `${BASE_PATH}/sheep.svg`,
  ROCK: `${BASE_PATH}/rock.svg`,
  WHEAT: `${BASE_PATH}/wheat.svg`,
  WOOD: `${BASE_PATH}/wood.svg`,
  BRICK: `${BASE_PATH}/brick.svg`,
  KNIGHT: `${BASE_PATH}/no-icon.svg`,
  ROAD_BUILDING: `${BASE_PATH}/no-icon.svg`,
  YEAR_OF_PLENTY: `${BASE_PATH}/no-icon.svg`,
  MONOPOLY: `${BASE_PATH}/no-icon.svg`,
  VICTORY_POINT: `${BASE_PATH}/no-icon.svg`,
  BURGLAR: `${BASE_PATH}/burglar.svg`,
};

export enum Ressources {
  WOOD = 'WOOD',
  BRICK = 'BRICK',
  WHEAT = 'WHEAT',
  ROCK = 'ROCK',
  SHEEP = 'SHEEP',
}

const { WOOD, BRICK, WHEAT, ROCK, SHEEP } = Ressources;

export const TILES = [
  SHEEP,
  SHEEP,
  SHEEP,
  SHEEP,
  WHEAT,
  WHEAT,
  WHEAT,
  WHEAT,
  WOOD,
  WOOD,
  WOOD,
  WOOD,
  BRICK,
  BRICK,
  BRICK,
  ROCK,
  ROCK,
  ROCK,
  'DESERT',
];

export const TILES_NUMBERS = [
  2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
];
