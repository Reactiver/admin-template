import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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

  menuItems: NbMenuItem[] = [
    {
      title: 'Menu link with parameters',
      expanded: true,
      children: [
        {
          title: 'Goes into angular `routerLink`',
          link: '', // goes into angular `routerLink`
        },
        {
          title: 'Goes directly into `href` attribute',
        },
        {
          title: 'Menu item path match `prefix`',
        },
        {
          title: 'Will be opened in new window (target=`_blank`)',
        },
        {
          title: 'Menu item with icon',
          icon: 'nb-search',
        },
        {
          title: 'Hidden menu item',
          link: '',
          hidden: true,
        },
      ],
    },
  ];

  private alive: boolean = true;
  selectedItem: string;

  constructor() { }

  ngOnDestroy() {
    this.alive = false;
  }

}
