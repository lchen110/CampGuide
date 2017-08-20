import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, NavParams } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth' ;
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' ;
import { MainPage } from '../main/main' ;
import { LoginPage } from '../login/login';

// import { User } from "../../models/user";

/**
* Generated class for the RegisterPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {
  public signupForm: FormGroup;
  loading: Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }
  
  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authProvider.signupUser(this.signupForm.value.email,
        this.signupForm.value.password)
        .then(() => {
          this.loading.dismiss().then( () => {
            this.navCtrl.setRoot(MainPage);
          });
        }, (error) => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
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
    
    backToLogin() {
      this.navCtrl.setRoot(LoginPage);
    }
    
  }
  