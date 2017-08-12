import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import  firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig={
    apiKey: "AIzaSyAGXYy_DrCIVWgYnQHi7YwN2DxeK5BIDGQ",
    authDomain: "campguide-489e7.firebaseapp.com",
    databaseURL: "https://campguide-489e7.firebaseio.com",
    projectId: "campguide-489e7",
    storageBucket: "campguide-489e7.appspot.com",
    messagingSenderId: "360796187188"
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
