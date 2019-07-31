import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { IonicModule } from '@ionic/angular';

import { PropDeetsPage } from './prop-deets.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: PropDeetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropDeetsPage]
})
export class PropDeetsPageModule {}
