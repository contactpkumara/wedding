import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './views/theme/error/error.component';
import { AuthGuard } from './core/auth/auth.guard';
import { BaseComponent } from './views/theme/base/base.component';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'wedding',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/content/content.module').then(m => m.ContentModule)
      },
      // {
      //   path: 'report',
      //   loadChildren: () => import('./views/pages/content/content.module').then(m => m.ContentModule)
      // },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // },
    ]
  },
  {
    path: 'error/404',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
