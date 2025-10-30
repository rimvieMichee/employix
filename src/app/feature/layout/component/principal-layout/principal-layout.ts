import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from '../../../../shared/components/header/header';
import {SecondSide} from '../../../../shared/components/second-side/second-side';
import {SideBarComponent} from '../../../../shared/components/side-bar/side-bar';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '../dashboard/dashboard';
import {Worker} from '../worker/worker';
import {Document} from '../document/document';

@Component({
  selector: 'app-principal-layout',
  imports: [Header, SecondSide, SideBarComponent, CommonModule, DashboardComponent, Worker, Document],
  templateUrl: './principal-layout.html',
  styleUrl: './principal-layout.scss',
})
export class PrincipalLayout {

  selectedSection = 'Dashboard';


  onSectionChange(section: string) {
    this.selectedSection = section;
  }


}
