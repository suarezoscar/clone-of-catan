import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_MODULES } from '../core/material-modules';
import { TooltipComponent } from './tooltip/tooltip.component';

const SHARED_COMPONENTS = [CardComponent, TooltipComponent];
const MODULES = [
  CommonModule,
  AngularSvgIconModule.forRoot(),
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserModule,
  BrowserAnimationsModule,
];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...MODULES, ...MATERIAL_MODULES],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
