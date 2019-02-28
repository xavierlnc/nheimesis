import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnecdotesPage } from './anecdotes';

@NgModule({
  declarations: [
    AnecdotesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnecdotesPage),
  ],
})
export class AnecdotesPageModule {}
