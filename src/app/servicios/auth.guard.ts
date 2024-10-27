import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  //Validamos si esta conectado
  //Si lo esta, tendra acceso a ciertas paginas
  //Si no , sera redireccionado a la pagina correspondiente
  if (authService.isConected()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
