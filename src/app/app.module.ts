import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserListComponent } from './user-list/user-list.component';

import { UserAuthModule } from './user-auth/user-auth.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    UserAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
