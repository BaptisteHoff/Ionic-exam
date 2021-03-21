import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicsListPageModule } from '../pages/musics-list/musics-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { MusicPageModule } from '../pages/musics-list/music/music.module';
import { MusicNewPageModule } from '../pages/musics-list/music-new/music-new.module';
import { MusicProvider } from '../providers/music/music';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

const firebase = {
  apiKey: "AIzaSyDqaB6LIs4tGpWDg7gGNZLxzdOVEy_7-sI",
  authDomain: "projet-jobs.firebaseapp.com",
  projectId: "projet-jobs",
  storageBucket: "projet-jobs.appspot.com",
  messagingSenderId: "690883926080",
  appId: "1:690883926080:web:361080ef83a643ad03a7a5"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MusicsListPageModule,
    AboutPageModule,
    TabPageModule,
    MusicPageModule,
    MusicNewPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider
  ]
})
export class AppModule {}
