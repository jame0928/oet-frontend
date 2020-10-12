import { CityModel } from './city.model';

export class ThirdPartyModel {

    id:number;
    first_name:string;
    second_name:string;
    last_name:string;
    identification:string; 
    city_id:number;   
    phone:string;   
    address:string;   
    
    full_name:string;
    city:CityModel;

    clear(): void {        
        this.id = null;
        this.first_name = null;
        this.second_name = null;
        this.last_name = null;
        this.identification = null;        
        this.city_id = null;
        this.phone = '';
        this.address = '';

        this.full_name = null; 
        this.city = null;        
    }
}
