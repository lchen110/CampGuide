import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import {Facebook} from '@ionic-native/facebook';
import  firebase from 'firebase';

import { MainPage } from "../main/main";


@Component({
  selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus, public facebook:Facebook) {

	}
	

  googleLogin(){
  	this.googleplus.login({
  		'webClientId':'998487466544-nrq0k1jvkfbqdctjvku4fn4uf689rh07.apps.googleusercontent.com',
  		'offline':true
  	}).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
				// this.navCtrl.push(MainPage),
				this.navCtrl.setRoot(MainPage)
				alert("Login success")
  		}).catch(ns=>{
  			alert("Not success")
  		})
  	})
	}
	
	fbLogin() {
		this.facebook.login(['email']).then(res=>{
			const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
			firebase.auth().signInWithCredential(facebookCredential).then(firebaseSucc=>{
				this.navCtrl.setRoot(MainPage)
				alert("Firebase success")
			}).catch(firebaseErr=>{
				alert("Firebase err")
			})
		}).catch(err=>{
			alert(JSON.stringify(err))
		})
	}
}
