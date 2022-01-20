import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './features/register-form/register-form.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { FormComponent } from './features/register-form/components/form/form.component';
import { UserCardComponent } from './features/user-list/components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    FormComponent,
    UserListComponent,
    UserCardComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
