import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateGuard } from './translate/translate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/translate', pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    data: { animationState: 'registerPage' }
  },
  {
    path: 'translate',
    loadChildren: () => import('./translate/translate.module').then(m => m.TranslateModule),
    canActivate: [TranslateGuard],
    data: { animationState: 'translatePage' }
  },
  {
    path: '**',
    redirectTo: '/translate', pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
