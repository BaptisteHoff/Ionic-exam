import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicProvider } from '../../../providers/music/music';


@IonicPage()
@Component({
  selector: 'page-music-new',
  templateUrl: 'music-new.html',
})
export class MusicNewPage {

  public music: any = {
    title: null,
    img: null,
    autor: null,
    year: null,

  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Music: MusicProvider
  ) { }

  onAdd() {
    this.Music.saveNewMusic(this.music).subscribe(() => {
      this.music = {
        title: null,
        img: null,
        autor: null,
        year: null
      };
      this.navCtrl.pop();
    });
  }


}
