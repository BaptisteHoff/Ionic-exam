import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MusicsListPage } from '../musics-list/musics-list';


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  // Les trois Boutons de la Navigation
  
  home = HomePage;
  musics = MusicsListPage;
  about = AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
}
