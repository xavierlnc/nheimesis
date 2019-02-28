import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembreDetailPage } from './membre-detail';

@NgModule({
  declarations: [
    MembreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MembreDetailPage),
  ],
})
export class MembreDetailPageModule {}
