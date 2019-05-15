import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  linearMode = true;
  fruits = [
    'Apple',
    'Pepper',
    'Banana',
    'Pineapple',
    'Apple',
    'Pepper',
    'Banana',
    'Pineapple',
  ]
  constructor() {}

  ngOnInit() {

  }

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
}
