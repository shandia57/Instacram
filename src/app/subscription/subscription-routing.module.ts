import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionPage } from './subscription.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionPage
  },
  {
    path: 'recap',
    loadChildren: () => import('./recap-sub/recap-sub.module').then(m => m.RecapSubPageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./self-data/self-data.module').then(m => m.SelfDataPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionPageRoutingModule { }
