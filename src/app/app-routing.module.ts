import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'connection',
    loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos-list/photos-list.module').then(m => m.PhotosListPageModule)
  },
  {
    path: 'follow',
    loadChildren: () => import('./follow-list/follow-list.module').then(m => m.FollowListPageModule)
  },
  {
    path: 'modal-profile-photo',
    loadChildren: () => import('./modal/modal-profile-photo/modal-profile-photo.module').then(m => m.ModalProfilePhotoPageModule)
  },
  {
    path: 'modal-gallery-photo',
    loadChildren: () => import('./modal/modal-gallery-photo/modal-gallery-photo.module').then(m => m.ModalGalleryPhotoPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
