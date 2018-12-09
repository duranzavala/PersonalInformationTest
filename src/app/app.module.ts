import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatInputModule, 
  MatSelectModule,
  MatFormFieldModule, 
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SignInComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
