import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const masterService= inject(MasterService);
  const router = inject(Router)
  const token=masterService.getToken();
  if(token){
    return true
  }
  router.navigate(['']);
  return false;
};