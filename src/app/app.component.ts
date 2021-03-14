import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'habi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.initialise();

    if (window.innerWidth > 600) {
      alert(
        'Please be aware, this site is made for mobiles. Experiences on a tablet or desktop may vary.'
      );
    }
  }
}
