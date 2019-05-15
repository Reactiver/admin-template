import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit() {
    console.log(this.sidebarService);
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
