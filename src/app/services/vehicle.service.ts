// Angular
import { Injectable } from '@angular/core';
//Models
import { VehicleModel} from '../models/vehicle.model';

//Base service
import {BaseApiService} from './base-api.service';

@Injectable({
	providedIn:'root'
})
export class VehicleService extends BaseApiService{
	// Public properties
	public url = 'vehicle';
}
