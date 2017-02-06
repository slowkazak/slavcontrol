import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {MessagesPage} from "../pages/messages/messages";
import {NewMessagePage} from "../pages/new-message/new-message";
import {SettingsPage} from "../pages/settings/settings";
import {SettingsProvider} from "../providers/settings.provider";
import {ApiProvider} from "../providers/api.provider";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MessagesPage,
    NewMessagePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MessagesPage,
    NewMessagePage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SettingsProvider,ApiProvider]
})
export class AppModule {}
