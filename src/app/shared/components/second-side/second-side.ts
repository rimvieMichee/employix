import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-second-side',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './second-side.html',
  styleUrl: './second-side.scss',
})
export class SecondSide {
  @Output() selectItem = new EventEmitter<string>();

  menuItems = [
    { label: 'Dashboard', icon: '' },
    { label: 'Employés', icon: '' },
    { label: 'Documents', icon: '' },
    { label: 'Paramètres', icon: '' }
  ];

  selected = this.menuItems[0].label;

  select(item: string) {
    this.selected = item;
    this.selectItem.emit(item);
  }
}
