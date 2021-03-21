import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MusicProvider } from '../../../providers/music/music';


@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  public modif: boolean = false;
  public title: string;
  public id: number;
  public music:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    private Music: MusicProvider,
    private Toast: ToastController
  ) { }

    ngOnInit() {
      this.title = this.navParams.get('title');
      this.id = this.navParams.get('id');
      this.music = this.Music.getMusicById(this.id);
      console.log(this.music);
    }

  onGoAccessModif() {
    let alert = this.alertCtrl.create({
      title : "Êtes-vous sur de vouloir modifier ?",
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: "Confirmer",
          handler: () => this.modif = !this.modif
        }
      ]
    });
    alert.present();
  }

  onModif() {
    this.Music.update(this.music.data, this.music.id).subscribe(() => {
      const toast = this.Toast.create({
        message: "Vos modifications ont été enregistrées",
        duration: 2000
      });
      toast.present();
      this.modif = false;
    })
  }



}
