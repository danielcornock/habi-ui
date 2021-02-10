import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavMenuItem } from './interfaces/nav-menu-item.interface';

@Component({
  selector: 'habi-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public links: Array<NavMenuItem>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.assignLinks();
  }

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  private assignLinks(): void {
    this.links = [
      {
        label: 'Home',
        icon: 'home',
        link: 'home'
      },
      {
        label: 'Progress',
        icon: 'calendar',
        link: 'progress'
      },
      {
        label: 'Analytics',
        icon: 'trending-up',
        link: 'analytics'
      },
      {
        label: 'Settings',
        icon: 'settings',
        link: 'settings'
      }
    ];
  }
}
