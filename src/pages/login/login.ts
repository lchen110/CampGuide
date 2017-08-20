import { Component } from '@angular/core';
import { IonicPage ,NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import {Facebook} from '@ionic-native/facebook';
import  firebase from 'firebase';

import { MainPage } from "../main/main";
import { RegisterPage } from '../register/register' ;
import { User } from "../../models/user";


@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	
	EmailValidator

	public loginForm:FormGroup;
	public loading:Loading;

	constructor(public navCtrl: NavController, public googleplus:GooglePlus, public facebook:Facebook, 
	public loadingCtrl: LoadingController, public alertCtrl: AlertController, 
	public authProvider: AuthProvider, public formBuilder: FormBuilder) {
		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}
	
	loginUser(): void {
		if (!this.loginForm.valid) {
			console.log(this.loginForm.value);
		} else {
			this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
			.then(authData => {
				this.loading.dismiss().then( ()=> {
					this.navCtrl.setRoot(MainPage);
				});
			}, error => {
				this.loading.dismiss().then( () => {
					let alert = this.alertCtrl.create({
						message: error.message,
						buttons: [
							{
								text: "Ok",
								role: 'Cancel'
							}
						]
					});
					alert.present();
				});
			});
			this.loading = this.loadingCtrl.create();
			this.loading.present();
		}
	}

	goToSignup(): void { 
		alert("go in here");
		this.navCtrl.setRoot(RegisterPage),
		alert("pass the nav");
	}

	goToResetPassword(): void { this.navCtrl.push('ResetPasswordPage'); }
	
	
	// login() {
		
	// }
	
	register() {
		this.navCtrl.push('RegisterPage');
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
