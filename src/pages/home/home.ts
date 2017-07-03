import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
/*import { AngularFireModule } from 'angularfire2';*/
// import  Firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus) {

  }

  // login(){
  // 	// this.googleplus.login({
  // 	// 	'webClientId':'289231772988-4rtvh91ivbqnpldba5trcgtm6ec40cql.apps.googleusercontent.com',
  // 	// 	'offline':true
  // 	// }).then(res=>{
  // 	// 	firebase.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
  // 	// 	.then(suc=>{
  // 	// 		alert("LOGIN SUC")
  // 	// 	}).catch(ns=>{
  // 	// 		alert("NOT SUCC")
  // 	// 	})
  // 	// })
  // }
}
