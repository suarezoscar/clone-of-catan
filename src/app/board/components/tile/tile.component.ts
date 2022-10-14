import { Component, Input, OnInit } from '@angular/core';
import { gameIcon, Ressources } from 'src/app/core/constants';
import { Tile } from './tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() tile: Tile = {
    haveBurglar: false,
    ressourceNumber: 0,
    type: '',
  };

  icon: string = '';
  burglar = gameIcon.BURGLAR;

  constructor() {}

  ngOnInit(): void {
    this.icon = gameIcon[this.tile.type as Ressources];

    console.log(this.tile);
  }
}
