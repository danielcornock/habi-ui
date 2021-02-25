import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormContainer, FormFactory, FormInputType } from 'ngx-form-trooper';
import { AuthenticationActions } from 'src/app/core/store/actions/authentication.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';

@Component({
  selector: 'habi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormContainer;

  constructor(
    private formFactory: FormFactory,
    private router: Router,
    private store: Store<RootState>
  ) {}

  ngOnInit(): void {
    this.form = this.formFactory.createForm([
      {
        name: 'email',
        label: 'Email address',
        type: FormInputType.TEXT,
        validators: {
          required: true
        }
      },
      {
        name: 'password',
        label: 'Password',
        type: FormInputType.PASSWORD,
        validators: {
          required: true
        }
      }
    ]);
  }

  public forgotPassword(): void {}

  public goToSignup(): void {
    this.router.navigateByUrl('auth/signup');
  }

  public openGoogleToSignIn(): void {
    this.store.dispatch(AuthenticationActions.openGoogleToSignIn());
  }

  public submitForm(): void {
    this.router.navigateByUrl('home');
  }
}
