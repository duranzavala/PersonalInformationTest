import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroupRegister: FormGroup;
  formGroupLogin: FormGroup;
  values: any;
  Email: string = "";
  Password: string = "";
  FirstName: string = "";
  LastName: string = "";
  Birthday: string = "";
  Gender: string = "";
  Height: string = "";
  Weight: string = "";
  Phone: string = "";
  ZipCode: string = "";
  Country: string = "";
  State: string = "";
  Street: string = "";
  Exterior: string = "";
  Interior: string = "";

  constructor(public _user: UserService, form: FormBuilder) {
    this.formGroupRegister = form.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required],
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Birthday: [null, Validators.pattern('^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$')],
      Gender: [null],
      Age: [null, Validators.pattern('^[0-9]{1,3}$')],
      Height: [null, Validators.pattern('^([0-9]+[\.][0-9]{1,2}|[0-9]+)$')],
      Weight: [null, Validators.pattern('^([0-9]+[\.][0-9]{1,2}|[0-9]+)$')],
      Phone: [null, Validators.pattern('^[\(][0-9]{3}[\)][\-][0-9]{3}[\-][0-9]{4}$')],
      Street: [null],
      Exterior: [null, Validators.pattern('^[0-9]*$')],
      Interior: [null, Validators.pattern('^[0-9]*$')],
      ZipCode: [null, Validators.pattern('^[0-9]{5}$')],
      Country: [null],
      State: [null],
    });
    this.formGroupLogin = form.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  SignIn(): void {
    if (this._user.Login(this.formGroupLogin.controls["Email"].value, this.formGroupLogin.controls["Password"].value)) {
      alert("Login successful");
      this.formGroupLogin.reset();
    } else {
      alert("Login incorrect")
    }
  }

  SignUp(): void {
    this._user.users.push({
      Id: this._user.CountUsers(),
      Email: this.formGroupRegister.controls['Email'].value,
      Password: this.formGroupRegister.controls['Password'].value,
      FirstName: this.formGroupRegister.controls['FirstName'].value,
      LastName: this.formGroupRegister.controls['LastName'].value,
      Birthday: this.formGroupRegister.controls['Birthday'].value,
      Gender: this.formGroupRegister.controls['Gender'].value,
      Height: this.formGroupRegister.controls['Height'].value,
      Weight: this.formGroupRegister.controls['Weight'].value,
      Phone: this.formGroupRegister.controls['Phone'].value,
      Address: this.formGroupRegister.controls['Street'].value ? + ", #Exterior " + this.formGroupRegister.controls['Exterior'].value + ", #Interior " + this.formGroupRegister.controls['Interior'].value : "",
      ZipCode: this.formGroupRegister.controls['ZipCode'].value,
      Country: this.formGroupRegister.controls['Country'].value,
      State: this.formGroupRegister.controls['State'].value
    });
    alert("Sign up successful");
    this.ClearFields();
  }

  ClearFields(): void {
    this.formGroupRegister.reset();
  }
}
