// Angular
import { Injectable } from '@angular/core';
//Models
import { CityModel} from '../models/city.model';
//Base service
import {BaseApiService} from './base-api.service';

@Injectable({
	providedIn:'root'
})
export class CityService extends BaseApiService{
	// Public properties
	public url = 'city';		

	displayWith(city: CityModel) {
		if (city) { return city.name; }
	}
}
