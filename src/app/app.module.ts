import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
// import  Firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig={
  apiKey: "AIzaSyAZXc6x-GMDCpY2qCCCj2r52o1vNMTSZv4",
    authDomain: "campguide-1219e.firebaseapp.com",
    databaseURL: "https://campguide-1219e.firebaseio.com",
    projectId: "campguide-1219e",
    storageBucket: "campguide-1219e.appspot.com",
    messagingSenderId: "289231772988"
}

// firebase.initializeApp(firebaseConfig)

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
