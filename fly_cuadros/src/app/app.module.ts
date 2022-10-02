import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CoreModule } from './core/core.module'
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './core/firebase/firebase.config';
import { MatCarouselModule } from 'ng-mat-carousel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatCarouselModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
