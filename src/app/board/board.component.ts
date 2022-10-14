import { Component, OnInit } from '@angular/core';
import { TILES, TILES_NUMBERS } from '../core/constants';
import { TileRow } from './components/tile/tile.model';
import { BoardService } from './service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  tileRows?: TileRow;

  constructor(private service: BoardService) {}

  ngOnInit(): void {
    const shuffledTiles = this.service.shuffle(TILES);
    const shuffledNumbers = this.service.shuffle(TILES_NUMBERS);
    this.tileRows = this.service.splitRows(
      this.service.setupTiles(shuffledTiles, shuffledNumbers)
    );
  }
}
