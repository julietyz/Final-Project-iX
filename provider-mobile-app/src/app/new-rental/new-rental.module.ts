import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { IonicModule } from '@ionic/angular';

import { NewRentalPage } from './new-rental.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: NewRentalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewRentalPage]
})
export class NewRentalPageModule {}
