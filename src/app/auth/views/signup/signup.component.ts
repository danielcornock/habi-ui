import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormContainer, FormFactory, FormInputType } from 'ngx-form-trooper';
import { AuthenticationActions } from 'src/app/core/store/actions/authentication.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';

@Component({
  selector: 'habi-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form: FormContainer;

  constructor(
    private formFactory: FormFactory,
    private router: Router,
    private store: Store<RootState>
  ) {}

  ngOnInit(): void {
    this.form = this.formFactory.createForm([
      {
        name: 'name',
        label: 'Name',
        type: FormInputType.TEXT,
        validators: {
          required: true
        }
      },
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
          required: true,
          minLength: 8
        }
      }
    ]);
  }

  public signUpWithGoogle(): void {
    this.store.dispatch(AuthenticationActions.openGoogleToRegister());
  }

  public submitForm(): void {}

  public goToLogin(): void {
    this.router.navigateByUrl('auth/login');
  }
}
