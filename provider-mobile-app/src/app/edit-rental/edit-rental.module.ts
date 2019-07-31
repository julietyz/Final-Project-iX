import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { IonicModule } from '@ionic/angular';

import { EditRentalPage } from './edit-rental.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: EditRentalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditRentalPage]
})
export class EditRentalPageModule {}
