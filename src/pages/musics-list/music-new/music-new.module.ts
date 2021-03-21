import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicNewPage } from './music-new';

@NgModule({
  declarations: [
    MusicNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicNewPage),
  ],
})
export class MusicNewPageModule {}
