import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicsListPage } from './musics-list';

@NgModule({
  declarations: [
    MusicsListPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicsListPage),
  ],
})
export class MusicsListPageModule {}
