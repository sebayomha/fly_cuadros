import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';

@Injectable({
  providedIn: 'root'
})
export class PaintingServiceService {

  constructor(private readonly db: AngularFirestore) { }

  public getPaintings() {
    return this.db.collection<any>(FirebaseCollections.PAINTINGS).valueChanges()
  }
}
