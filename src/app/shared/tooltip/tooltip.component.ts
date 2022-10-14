import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() text?: string = '';
  @Input() position: TooltipPosition = 'below';

  constructor() {}

  ngOnInit(): void {}
}
