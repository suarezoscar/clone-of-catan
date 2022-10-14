import { gameIcon } from 'src/app/core/constants';

export type Card = {
  [key in CardContent]: CardInfo;
};

export type CardInfo = {
  icon: string;
  text: CardText;
  type: CardType;
};

export type CardText = {
  title: string;
  footer?: string;
};

export enum CardType {
  RESSOURCE,
  DEVELOPMENT,
}

export enum DevelopmentCard {
  KNIGHT = 'KNIGHT',
  ROAD_BUILDING = 'ROAD_BUILDING',
  YEAR_OF_PLENTY = 'YEAR_OF_PLENTY',
  MONOPOLY = 'MONOPOLY',
  VICTORY_POINT = 'VICTORY_POINT',
}

export enum CardContent {
  WOOD = 'WOOD',
  BRICK = 'BRICK',
  WHEAT = 'WHEAT',
  ROCK = 'ROCK',
  SHEEP = 'SHEEP',
  KNIGHT = 'KNIGHT',
  ROAD_BUILDING = 'ROAD_BUILDING',
  YEAR_OF_PLENTY = 'YEAR_OF_PLENTY',
  MONOPOLY = 'MONOPOLY',
  VICTORY_POINT = 'VICTORY_POINT',
  NONE = 'NONE',
}

export const CARD_INFO: Partial<Card> = {
  SHEEP: {
    text: { title: 'Oveja' },
    icon: gameIcon.SHEEP,
    type: CardType.RESSOURCE,
  },
  ROCK: {
    text: { title: 'Piedra' },
    icon: gameIcon.ROCK,
    type: CardType.RESSOURCE,
  },
  WHEAT: {
    text: { title: 'Trigo' },
    icon: gameIcon.WHEAT,
    type: CardType.RESSOURCE,
  },
  WOOD: {
    text: { title: 'Madera' },
    icon: gameIcon.WOOD,
    type: CardType.RESSOURCE,
  },
  BRICK: {
    text: { title: 'Arcilla' },
    icon: gameIcon.BRICK,
    type: CardType.RESSOURCE,
  },
  KNIGHT: {
    text: {
      title: 'Caballero',
      footer:
        'Al jugar esta carta desplaza al ladrón y roba una carta de materia prima a uno de los jugadores afectados.',
    },
    type: CardType.DEVELOPMENT,
    icon: gameIcon.KNIGHT,
  },
  ROAD_BUILDING: {
    text: {
      title: 'Carreteras',
      footer:
        'Al jugar esta carta puedes construir dos carreteras sin coste alguno.',
    },
    icon: gameIcon.ROAD_BUILDING,
    type: CardType.DEVELOPMENT,
  },
  YEAR_OF_PLENTY: {
    icon: gameIcon.YEAR_OF_PLENTY,
    text: {
      title: 'Invento',
      footer:
        'Al jugar esta carta toma las dos cartas de materias primas que desees de la reserva.',
    },
    type: CardType.DEVELOPMENT,
  },
  MONOPOLY: {
    text: {
      title: 'Monopolio',
      footer:
        'Al jugar esta carta elige una materia prima. Todos los jugadores deberán entregarte todas las cartas de esa materia prima que tengan.',
    },
    icon: gameIcon.MONOPOLY,
    type: CardType.DEVELOPMENT,
  },
  VICTORY_POINT: {
    text: {
      title: 'Punto de victoria!',
      footer: 'Consigues 1 punto de victoria.',
    },
    icon: gameIcon.VICTORY_POINT,
    type: CardType.DEVELOPMENT,
  },
};
