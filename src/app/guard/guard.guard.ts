import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token-service/token.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isTokenValid(localStorage.getItem('token')!)) {
    return true;
  } else {
    // Sauvegarder l'URL de destination pour redirection post-login
    localStorage.setItem('redirectUrl', state.url);
    router.navigate(['login']);
    return false;
  }
};
