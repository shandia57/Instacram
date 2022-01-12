import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserService } from '../user.service';
//import {Filesystem, Directory} from '@capacitor/filesystem';
//import {Storage} from '@capacitor/storage';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photos: picture[] = [];

  constructor(public user: UserService) { }

  ngOnInit() {
  }
  async addNewPhoto() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    this.photos.unshift({
      filepath: ' ',
      webviewPath: capture.webPath
    });

  }
  takePhoto() {
    this.addNewPhoto();
  }



}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface picture {
  filepath: string;
  webviewPath: string;
}
