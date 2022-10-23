import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { PurchaseResponse, StorePurchaseRequest } from './purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private readonly db: AngularFirestore) { }

  public storePurchase(request: StorePurchaseRequest): Promise<DocumentReference<StorePurchaseRequest>> {
    return this.db.collection<StorePurchaseRequest>(FirebaseCollections.PURCHASE).add(request)
  }

  public getPurchase(purchaseId: string): Observable<PurchaseResponse | undefined> {
    return this.db.collection<PurchaseResponse>(FirebaseCollections.PURCHASE).doc(purchaseId).valueChanges({ idField: 'id' })
  }
}
