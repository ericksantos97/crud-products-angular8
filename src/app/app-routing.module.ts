import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-layout/login.module').then(m => m.LoginModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    canActivate: [AuthGuard],
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
