import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { ProviderService } from '../services/provider.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ProviderAuthService } from '../services/provider-auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  providers: any;

  listingsBackend: any;
  dummy: any;

  id: string;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private providerService: ProviderService,
    private providerAuthService: ProviderAuthService

  ) {
    this.id = window.localStorage.getItem('providerid');
    this.listingsBackend = [];

  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

  ionViewWillEnter() {
    this.providers = [];
    this.listingsBackend = [];
    
    this.providerService.getById(this.id).then(res => {
      this.providers = res;
      console.log(this.providers);
    }).catch(err => { console.log(err) })

    this.listingService.getByProviderId(this.id).then((res: any) => {
      this.listingsBackend = res;
      console.log(this.listingsBackend);
      if (this.listingsBackend.length == 0) {
        this.dummy = {
          name: "None",
          description: "Create a rental today!",
          imgUrl: ""
        }
        this.listingsBackend.push(this.dummy);
      }


    }).catch(err => { console.log(err) })

  }

  naveToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

  navToPropDeets(listing) {
    localStorage.setItem('listingid', listing.id);
    this.navCtrl.navigateForward("prop-deets");
  }

  logout(){
    this.providerAuthService.logout();
    this.navCtrl.navigateForward('login');
  }

}
