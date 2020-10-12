// Angular
import { Injectable } from '@angular/core';
//Models
import { ThirdPartyModel} from '../models/third_party.model';

//Base service
import {BaseApiService} from './base-api.service';

@Injectable({
	providedIn:'root'
})
export class ThirdPartyService extends BaseApiService{
	// Public properties
	public url = 'third-party';
}
