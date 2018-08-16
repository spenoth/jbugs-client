import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

/*const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent},
]*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule
//    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent /*, RouterModule*/]
})
export class LoginModule { }
