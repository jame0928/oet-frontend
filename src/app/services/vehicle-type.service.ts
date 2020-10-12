// Angular
import { Injectable } from '@angular/core';
//Models
import { VehicleTypeModel} from '../models/vehicle_type.model';
//Base service
import {BaseApiService} from './base-api.service';

@Injectable({
	providedIn:'root'
})
export class VehicleTypeService extends BaseApiService{
	// Public properties
	public url = 'vehicle-type';		
}
