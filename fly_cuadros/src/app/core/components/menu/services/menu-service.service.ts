import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseCollections} from 'src/app/core/firebase/firebase.collections';
import { MenuNode } from '../menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private readonly db: AngularFirestore) { }

  public getMenu(): Observable<MenuNode[]> {
    return this.db.collection<MenuNode>(FirebaseCollections.MENU).valueChanges({ idField: 'id' })
  }
}
