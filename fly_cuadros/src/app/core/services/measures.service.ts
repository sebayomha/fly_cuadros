import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { Measure } from '../models/measures.model';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  public measures$ = new BehaviorSubject<Measure[] | null>(null);

  constructor(private readonly db: AngularFirestore) { }

  public loadMeasures(): void {
    this.db.collection<Measure>(FirebaseCollections.MEASURES)
    .valueChanges({ idField: 'id' })
    .subscribe(measures => this.measures$.next(measures))
  }
}
