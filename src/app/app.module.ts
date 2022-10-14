import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { SharedModule } from './shared/shared.module';

const MODULES = [AppRoutingModule, SharedModule, BoardModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
