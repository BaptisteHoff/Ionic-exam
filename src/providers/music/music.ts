import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map'


@Injectable()
export class MusicProvider {

  private musics:any =[];
  musicSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllMusics();
  }

  getAllMusics() {
    return this.db.collection('musics').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => { 
      this.musics = res;
      this.emitMusicSubject();
    })
  }

  emitMusicSubject() {
    this.musicSubject.next(this.musics.slice());
  }

  getMusicById(id:number) {
    for(const music of this.musics){
      if(music.id == id){
        return music;
      }
    }
  }

  saveNewMusic(music:any) {
    return new Observable(obs => {
      this.db.collection('musics').add(music).then(() => {
        console.log("Succes");
        obs.next();
      })
    });
  }

  update(music: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`musics/${id}`).update(music);
      obs.next();
    })
  }

  delete(id: any) {
    this.db.doc(`musics/${id}`).delete();
  }

}
