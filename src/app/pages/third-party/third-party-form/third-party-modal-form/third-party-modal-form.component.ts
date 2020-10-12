import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { MatDialogRef,MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//services
import {ThirdPartyService} from '../../../../services/third_party.service';
import {CityService} from '../../../../services/city.service';
//Models
import { ThirdPartyModel } from '../../../../models/third_party.model';
import { Observable } from 'rxjs';
import { CityModel } from '../../../../models/city.model';



@Component({
  selector: 'third-party-modal-form',
  templateUrl: './third-party-modal-form.component.html',
  styleUrls: []
})
export class ThirdPartyModalFormComponent implements OnInit,OnDestroy {

  autoCity: Observable<any[]>;

  // Public properties
  id:number; 
  thirdParty:ThirdPartyModel = new ThirdPartyModel;
  thirdPartyForm: FormGroup;
  hasFormErrors: boolean = false;
  is_new:boolean = true;
  viewLoading: boolean = false;

  cities:CityModel[];

  
  @Input() childMessage: string;

  constructor(
    public dialogRef: MatDialogRef<ThirdPartyModalFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public thirdPartyService: ThirdPartyService,
    public cityService: CityService,
  ) { }

  ngOnInit() {    
    this.id = this.data?.id || null;    
    this.createForm();

    if(this.id){
      this.thirdPartyService.getDataById(this.id).subscribe((response:any) => {
        this.thirdParty = response;
        this.setValues();
      });
    }

    this.cityService.getData().subscribe(response => {
      this.cities = response.data;
    });  
  } 



	createForm() {
		this.thirdPartyForm = this.fb.group({    
      identification: [null, Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])], 
      first_name: [null, Validators.compose([Validators.required,Validators.maxLength(50)])],
      second_name: [null, Validators.compose([Validators.required,Validators.maxLength(50)])],
      last_name: [null, Validators.compose([Validators.required,Validators.maxLength(100)])],
      address: [null, Validators.compose([Validators.required,Validators.maxLength(400)])],
      phone: [null,Validators.compose([Validators.required,Validators.maxLength(50)])],
      city_id: [null, Validators.compose([Validators.required])],
    });
    
    
  }

  setValues(){
    this.thirdPartyForm.patchValue(this.thirdParty);
  }

  onSubmit(thirdPartyFormValues:any) {
    console.log(this.thirdPartyForm)
    //validate form errors
    if(this.hasFormErrors = this.thirdPartyService.validateFormErrors(this.thirdPartyForm)){
      return;
    }    

    if(this.thirdParty?.id){
      thirdPartyFormValues.id = this.thirdParty.id;
    }
    

    this.thirdPartyService.save(thirdPartyFormValues)
    .subscribe(response => {
        this.dialogRef.close({ response:response});       
    });

	}
  

	getTitle(): string {
		if (this.id) {
			return `Editando Tercero`;
		}

		return 'Creando Tercero';
  }
  

  ngOnDestroy() {

	}

}
