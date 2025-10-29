import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from '../card/company-card/company-card';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, CompanyCardComponent],
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.scss'],
})
export class SideBarComponent {
  companies = signal([
    { letter: 'S', name: 'Société Alpha', active: true },
    { letter: 'I', name: 'InnovaTech', active: false },
    { letter: 'W', name: 'Webify Solutions', active: false },
  ]);

  selectCompany(selectedLetter: string) {
    this.companies.update(companies =>
      companies.map(c => ({
        ...c,
        active: c.letter === selectedLetter,
      }))
    );
  }

}
