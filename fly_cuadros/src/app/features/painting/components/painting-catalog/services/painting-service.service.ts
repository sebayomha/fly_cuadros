import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { MeasuresService } from 'src/app/core/services/measures.service';
import { Box } from 'src/app/features/dashboard/models/dashboard.model';
import { DB_BOX_TYPE_FIELD, Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingServiceService {

  constructor(private readonly db: AngularFirestore, private readonly measuresService: MeasuresService) { }

  public getPaintings(paintingCode: string): Observable<Painting[]> {
    return this.db.collection<Painting>(FirebaseCollections.PAINTINGS, ref => {
      return ref.where(DB_BOX_TYPE_FIELD, '==', paintingCode)
    }).valueChanges({ idField: 'id' }).pipe(map((paintings) => {
      return paintings.map((painting) => ({
        ...painting, 
        medidas: this.measuresService.measures$.getValue()?.filter(measure => measure.tipo === painting.tipo_cuadro) ?? []
      }))
    }))
  }

  public getPaintingDetail(paintingId: string): Observable<Painting | undefined> {
    return this.db.collection<Painting>(FirebaseCollections.PAINTINGS).doc(paintingId).valueChanges()
  }

  public getBoxDetail(paintingCode: string): Observable<Box | undefined> {
    return this.db.collection<Box>(FirebaseCollections.BOX_TYPES).doc(paintingCode).valueChanges()
  }
}
