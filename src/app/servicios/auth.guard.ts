import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  console.log("Verificando acceso en authGuard, conectado:", authService.isConected());

  if (authService.isConected()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
