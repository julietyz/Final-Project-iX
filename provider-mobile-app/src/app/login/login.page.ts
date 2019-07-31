import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ProviderAuthService } from '../services/provider-auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  isOpen = true;
  flyIn = true;


  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private providerAuthService: ProviderAuthService

  ) { }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
  ngOnInit() {
  }

  loginBackend(){
    const authProvider = {
      email: this.email, 
      password: this.password
    };
  
      this.providerAuthService.login(authProvider).then(res=>{
  
        const testId = localStorage.getItem("providerid");
        console.log(testId);
  
        this.navCtrl.navigateForward('profile', {
          queryParams: {
            provider: res
          }
        });
  
      }).catch(err => {
        this.presentAlert(err);
    });
  }

  register() {
    alert("Feature coming soon!")
    // This should navigate to the register page:
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}
