import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './servicios/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./access/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./access/resetpass/resetpass.module').then(m => m.ResetpassPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./access/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'controller',
    loadChildren: () => import('./admin/controller/controller.module').then(m => m.ControllerPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./access/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./profesor/inicio-profesor/inicio-profesor.module').then(m => m.InicioProfesorPageModule)
  },
  {
    path: 'perfil-profesor',
    loadChildren: () => import('./profesor/perfil-profesor/perfil-profesor.module').then(m => m.PerfilProfesorPageModule)
  },
  {
    path: 'qr-genera',
    loadChildren: () => import('./qrcode/qr-genera/qr-genera.module').then(m => m.QrGeneraPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./qrcode/scanner/scanner.module').then(m => m.ScannerPageModule)
  },

  //Pagina configurada con ** queda indicada como pagina de redireccionamiento en casos de error 
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
