import { Component, Input } from '@angular/core';
import { CardInfo, CardContent, CARD_INFO } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  _card?: CardInfo;
  _content: CardContent = CardContent.NONE;

  @Input()
  get content(): CardContent {
    return this._content;
  }
  set content(cardContent: CardContent) {
    this._content = cardContent;
    this._card = CARD_INFO[cardContent];
  }
}
