export class VehicleTypeModel {

    id:number;
    name:string;  

    clear(): void {        
        this.id = null;        
        this.name = null;
    }    
}
