import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorsDirective } from 'src/app/shared/directives/custom-validators.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public error = false;
  public changePassForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private customValidators: CustomValidatorsDirective,
    private router: Router,
    private userService: UserService
  ) {
    this.changePassForm = this.fb.group({
      passwordCurrent: ['', Validators.required],
      passwordNew: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.customValidators.patternValidator(/\d/, { hasNumber: true }),
          this.customValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),
          this.customValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true,
          }),
          this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
            hasSpecialCharacters: true,
          }),
        ],
      ],
      passwordConfirm: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.customValidators.patternValidator(/\d/, { hasNumber: true }),
          this.customValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),
          this.customValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true,
          }),
          this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
            hasSpecialCharacters: true,
          }),
        ],
      ],
    });
  }

  ngOnInit() {}

  public submit() {
    if (this.changePassForm.invalid) {
      this.error = true;
      return;
    }
    console.log(this.changePassForm.value);
    this.userService.signOut();
    this.router.navigate(['/user/signin']);
  }
}
