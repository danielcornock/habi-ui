import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'habi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isLoggedIn$ = this.authService
      .isAuthenticated()
      .pipe(tap(console.log));
  }
}
