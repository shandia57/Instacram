import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosListPage } from './photos-list.page';


const routes: Routes = [
  {
    path: '',
    component: PhotosListPage
  },
  {
    path: 'update-photo',
    loadChildren: () => import('./update-photo/update-photo.module').then(m => m.UpdatePhotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosListPageRoutingModule { }
