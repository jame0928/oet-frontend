// Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

//Environment
import { environment } from '../../environments/environment';

//Base service
import {BaseApiService} from './base-api.service';

//Models
import { User } from '../models/user.model';

@Injectable({
  providedIn:'root'
})
export class AuthService extends BaseApiService{
	// Public properties
  public url = 'auth/login';		

	login(username: string, password: string): Observable<User> {

    return this.getPostData({
      username:username,
      password:password,
    }).pipe(tap(user => {

      if(user?.accessToken){
        
        this.setToken(user?.accessToken);
        this.router.navigateByUrl('home');
      }
    }));

  }

  logout(){
    
    localStorage.removeItem(environment.authTokenKey);
    //this.router.navigateByUrl('/auth/login');
  }

  private setToken(accessToken){
    localStorage.setItem(environment.authTokenKey,accessToken);
  }

  getToken(){
    return localStorage.getItem(environment.authTokenKey);
  }

  isLogged(){
    if(this.getToken()){    
      return true;
    }

    return false;
  }
}
