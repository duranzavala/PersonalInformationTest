import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean = false;
  currentUser: string = "";
  userLogin: UserLogin = {
    Email: "",
    Password: ""
  };

  users: Array<User> = new Array<User>();

  constructor(private _cookies: CookieService) {
    this.isLogged = _cookies.check("user")
    if (this.isLogged) {
      this.userLogin.Email = _cookies.get("user");
      this.currentUser = _cookies.get("name");
    }
  }

  CountUsers(){
    return this.users.length + 1;
  }

  Login(user: string, password: string): boolean {
    var result = this.users.filter(item => item.Email.toLocaleLowerCase() == user.toLocaleLowerCase() && item.Password.toLocaleLowerCase() == password.toLocaleLowerCase());
    this.isLogged = !!result.length;
    if (this.isLogged) {
      this.userLogin.Email = result[0].Email;
      this.currentUser = result[0].FirstName + " " + result[0].LastName;
      this._cookies.set("user", result[0].Email);
      this._cookies.set("name", this.currentUser);
    }
    return this.isLogged
  }

  LogOut(): void {
    this._cookies.delete("user");
    this._cookies.delete("name");
    this.isLogged = false;
    this.currentUser = "";
  }

}

interface UserLogin {
  Email: string,
  Password?: string
}

interface User {
  Id: Number,
  Email: string,
  Password: string,
  FirstName: string,
  LastName: string,
  Birthday: string,
  Gender: string,
  Height: string,
  Weight: string,
  Phone: string,
  Address: string,
  ZipCode: string,
  Country: string,
  State: string
}