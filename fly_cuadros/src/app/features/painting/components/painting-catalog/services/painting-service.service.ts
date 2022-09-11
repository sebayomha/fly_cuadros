import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { DB_BOX_TYPE_FIELD, Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingServiceService {

  constructor(private readonly db: AngularFirestore) { }

  public getPaintings(paintingCode: string): Observable<Painting[]> {
    return this.db.collection<Painting>(FirebaseCollections.PAINTINGS, ref => {
      return ref.where(DB_BOX_TYPE_FIELD, '==', paintingCode)
    }).valueChanges()
  }
}
