import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserListComponent } from './user-list/user-list.component';

import { UserAuthModule } from './user-auth/user-auth.module';
import { CounterComponent } from './counter/counter.component';
import { InterPolationComponent } from './inter-polation/inter-polation.component';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopComponent } from './loop/loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CounterComponent,
    InterPolationComponent,
    IfElseComponent,
    LoopComponent,
    StyleBindingComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    UserAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
