import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { Box } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly db: AngularFirestore) { }

  public getBoxTypes(): Observable<Box[]> {
    return this.db.collection<Box>(FirebaseCollections.BOX_TYPES).valueChanges({ idField: 'id' })
  }
}
