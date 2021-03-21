import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { MusicProvider } from '../../providers/music/music';
import { MusicNewPage } from './music-new/music-new';
import { MusicPage } from './music/music';


@IonicPage()
@Component({
  selector: 'page-musics-list',
  templateUrl: 'musics-list.html',
})
export class MusicsListPage implements OnInit {

  musics: any = [];
  musicSubscribtion: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Music: MusicProvider
  ) { }

  ngOnInit(): void {
    this.musicSubscribtion = this.Music.musicSubject.subscribe((listMusic) => {
      console.log(listMusic);
      this.musics = listMusic;
    })
  }

  onGoToCreate() {
    this.navCtrl.push(MusicNewPage);
  }

  onGoToMusic(musicTitle: string, _id: number) {
    this.navCtrl.push(MusicPage, {title: musicTitle, id: _id});
  }

}
