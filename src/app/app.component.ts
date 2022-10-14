import { Component } from '@angular/core';
import { CardContent } from './shared/card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  content = CardContent;
}
