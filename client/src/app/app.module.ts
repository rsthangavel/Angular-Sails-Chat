import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdToolbarModule, MdButtonModule, MdCardModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdGridListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import {SailsModule} from "angular2-sails";
import { ChatPageComponent } from './component/chat-page/chat-page.component';
const appRoutes :Routes = [
  {path : '', component : LoginComponent},
  {path: 'chat', component: ChatPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    RouterModule.forRoot(appRoutes),
    SailsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
