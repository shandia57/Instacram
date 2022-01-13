import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { Image } from './models/image.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/films';
  user: AngularFirestoreCollection<User>;
  isLoggediN = false;
  anyUser: any;
  task?: AngularFireUploadTask;

  constructor(
    private db: AngularFirestore,
    public firebaseAuth: AngularFireAuth,
    protected storage: AngularFireStorage,
  ) {
    this.user = db.collection("users");
  }

  // 1st : create a user Auth

  async signup(email: string, password: string) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(email.toLowerCase(), password)
        .then(res => {
          this.isLoggediN = true
          sessionStorage.setItem('userConnected', email.toLowerCase())
        })
    } catch (err) {
      console.log(err)
    }
  }

  // 2nd : Save his data
  insertUser(user: User): any {
    this.db.collection("users").doc(user.mail.toLowerCase()).set({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      description: user.description
    });
  }

  // 3rd : Connect a user

  async signin(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
          this.isLoggediN = true;
          localStorage.setItem('userConnected', JSON.stringify(res.user))
          sessionStorage.setItem('userConnected', email.toLowerCase());
          // console.log(JSON.stringify(this.anyUser['uid']));
          // this.anyUser = res.user;
          // console.log(this.anyUser);
          // console.log(JSON.stringify(this.anyUser['uid']));
        })
    } catch (err) {
      console.log(err);
    }
  }

  getAllUsers() {
    return this.user.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })))
    );
  }

  getSingleUser(id: any): any {
    return new Observable(obs => {
      this.user.doc(id).get().subscribe(res => {
        obs.next({ ...res.data() });
      });
    });
  }

  updateUser(user: User, mail: string) {
    return new Observable(obs => {
      this.user.doc(mail).update(user);
      obs.next();
    });
  }

  insertImage(user, mail, urlImage) {
    this.db.collection("users").doc(mail).set({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      description: user.description,
      profile: urlImage
    });
  }
  insertImageToGalery(mail, array) {
    this.db.collection("gallery").doc("photos").collection(mail).add({
      image: array[0],
      lieu: array[1],
      description: array[2],
    })
  }

  getAllImagesFromGallery(mail) {
    return this.db.collection("gallery").doc("photos").collection(mail).snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })))
    );
  }

  getSingleImage(mail: any, id: any): any {
    return new Observable(obs => {
      this.db.collection("gallery").doc("photos").collection(mail).doc(id).get().subscribe(res => {
        obs.next({ ...res.data() });
      });
    });
  }

  updateImage(image: Image, mail: string, id: any) {
    return new Observable(obs => {
      this.db.collection("gallery").doc("photos").collection(mail).doc(id).update(image);
      obs.next();
    });
  }

  deleteImage(mail: any, id: any) {
    this.db.collection("gallery").doc("photos").collection(mail).doc(id).delete();
  }

  update(user: User) {
    return new Observable(obs => {
      this.user.doc(user.mail).update(user);
      obs.next();
    });
  }

  getAllFilms(): any {
    return this.user.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })))
    );
  }

  saveNewFilm(film: User): any {
    return new Observable(obs => {
      this.user.add({ ...film }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.user.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }


  delete(id: any) {
    this.db.doc(`films/${id}`).delete();
  }
}
