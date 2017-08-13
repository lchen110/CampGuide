import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import  firebase from 'firebase';

import { MainPage } from "../main/main";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus) {

  }

  login(){
  	this.googleplus.login({
  		'webClientId':'998487466544-nrq0k1jvkfbqdctjvku4fn4uf689rh07.apps.googleusercontent.com',
  		'offline':true
  	}).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
				// this.navCtrl.push(MainPage),
				this.navCtrl.setRoot(MainPage),
				alert("Login SUCC")
  		}).catch(ns=>{
  			alert("NOT SUCC")
  		})
  	})
  }
}
