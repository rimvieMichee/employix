import { Component, input } from '@angular/core';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-card.html',
  styleUrls: ['./company-card.scss'],
})
export class CompanyCardComponent {
  letter = input.required<string>();
  active = input(false);
  name = input.required<string>();

  hovered = false;
}
