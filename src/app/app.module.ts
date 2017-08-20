import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth' ;

import  firebase from 'firebase';

import {Facebook} from '@ionic-native/facebook';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig={
    apiKey: "AIzaSyCmjBMYGnXdoLTRwbODebwf-jTINPEFi0E",
    authDomain: "campguide-16488.firebaseapp.com",
    databaseURL: "https://campguide-16488.firebaseio.com",
    projectId: "campguide-16488",
    storageBucket: "campguide-16488.appspot.com",
    messagingSenderId: "998487466544"
}

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Facebook,
    AuthProvider
  ]
})
export class AppModule {}
