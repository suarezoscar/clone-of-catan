import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './components/tile/tile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BoardComponent } from './board.component';
import { BoardService } from './service/board.service';

@NgModule({
  declarations: [TileComponent, BoardComponent],
  providers: [BoardService],
  imports: [CommonModule, AngularSvgIconModule.forRoot()],
  exports: [BoardComponent],
})
export class BoardModule {}
