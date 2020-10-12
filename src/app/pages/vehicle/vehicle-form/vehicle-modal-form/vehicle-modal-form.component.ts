import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { MatDialogRef,MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

//services
import {ThirdPartyService} from '../../../../services/third_party.service';
import {VehicleTypeService} from '../../../../services/vehicle-type.service';
import {VehicleService} from '../../../../services/vehicle.service';
//Models
import { ThirdPartyModel } from '../../../../models/third_party.model';
import { VehicleTypeModel } from '../../../../models/vehicle_type.model';
import { VehicleModel } from '../../../../models/vehicle.model';




@Component({
  selector: 'vehicle-modal-form',
  templateUrl: './vehicle-modal-form.component.html',
  styleUrls: []
})
export class VehicleModalFormComponent implements OnInit,OnDestroy {

  autoCity: Observable<any[]>;

  // Public properties
  id:number; 
  vehicle:VehicleModel = new VehicleModel;
  vehicleForm: FormGroup;
  hasFormErrors: boolean = false;
  is_new:boolean = true;
  viewLoading: boolean = false;

  third_parties:ThirdPartyModel[];
  vehicle_types:VehicleTypeModel[];

  
  @Input() childMessage: string;

  constructor(
    public dialogRef: MatDialogRef<VehicleModalFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public vehicleService: VehicleService,
    public thirdPartyService: ThirdPartyService,
    public vehicleTypeService: VehicleTypeService,
  ) { }

  ngOnInit() {    
    this.id = this.data?.id || null;    
    this.createForm();

    if(this.id){
      this.vehicleService.getDataById(this.id).subscribe((response:any) => {
        this.vehicle = response;
        this.setValues();
      });
    }

    this.thirdPartyService.getData().subscribe(response => {
      this.third_parties = response.data;
    }); 
    
    this.vehicleTypeService.getData().subscribe(response => {
      this.vehicle_types = response.data;
    }); 
  } 



	createForm() {
		this.vehicleForm = this.fb.group({    
      plate: [null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(12)])], 
      color: [null, Validators.compose([Validators.required,Validators.maxLength(50)])],
      brand: [null, Validators.compose([Validators.required,Validators.maxLength(20)])],

      vehicle_type_id: [null, Validators.compose([Validators.required])],
      third_party_owner_id: [null, Validators.compose([Validators.required])],
      third_party_driver_id: [null, Validators.compose([Validators.required])],
    });
    
    
  }

  setValues(){
    this.vehicleForm.patchValue(this.vehicle);
  }

  onSubmit(vehicleFormValues:any) {
    
    //validate form errors
    if(this.hasFormErrors = this.vehicleService.validateFormErrors(this.vehicleForm)){
      return;
    }    

    if(this.vehicle?.id){
      vehicleFormValues.id = this.vehicle.id;
    }
    

    this.vehicleService.save(vehicleFormValues)
    .subscribe(response => {
        this.dialogRef.close({ response:response});       
    });

	}
  

	getTitle(): string {
		if (this.id) {
			return `Editando Vehículo`;
		}

		return 'Creando Vehículo';
  }
  

  ngOnDestroy() {

	}

}
