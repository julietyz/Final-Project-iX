import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { ProviderService } from '../services/provider.service';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProviderAuthService } from '../services/provider-auth.service';
import { UploadService } from '../services/upload.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  providers: any;
  ngForm: FormGroup;
 image: any;
 public user: any;


  listingsBackend: any;
  dummy: any;

  id: string;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private providerService: ProviderService,
    private providerAuthService: ProviderAuthService,
    private uploadService: UploadService,
   private formBuilder: FormBuilder,
   private modalCtrl: ModalController


  ) {
    this.id = window.localStorage.getItem('providerid');
    this.listingsBackend = [];

    this.ngForm = this.formBuilder.group({
      avatar: ['']
    });
 

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
  createImageFromBlob(image){
    let reader = new FileReader();
    reader.addEventListener("load", () =>{
      this.image = reader.result;
    }, false);
    if(image){
      this.image = reader.readAsDataURL(image);
    }
  }
  
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ngForm.get('avatar').setValue(file);
      this.createImageFromBlob(file);
    }
  }
  
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.ngForm.get('avatar').value);
 
    const userId = localStorage.getItem('userId');
    this.uploadService.uploadImage(userId, formData, (err, res) => {
      if (err) {
        alert(err);
      } else {
        this.user = res.user;
      }
    });
  }
 

}
