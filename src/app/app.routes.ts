import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: "", loadComponent: () => import('./feature/auth/login/login').then(m => m.Login) },
  {path: "layout", loadComponent: () => import('./feature/layout/component/principal-layout/principal-layout').then(m =>m.PrincipalLayout),}
];
