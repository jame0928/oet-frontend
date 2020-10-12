import { VehicleTypeModel } from './vehicle_type.model';
import { ThirdPartyModel } from './third_party.model';

export class VehicleModel {

    id:number;
    plate:string;
    color:string;
    brand:string;
    type_id:number;
    third_party_owner_id:number; 
    third_party_driver_id:number;    

    type:VehicleTypeModel;
    third_party_owner:ThirdPartyModel;
    third_party_driver:ThirdPartyModel;

    clear(): void {        
        this.id = null;
        this.plate = null;
        this.color = null;
        this.brand = null;
        this.type_id = null;
        this.third_party_owner_id = null;
        this.third_party_driver_id = null;

        this.type = null;
        this.third_party_owner = null;
        this.third_party_driver = null;        
    }
}
