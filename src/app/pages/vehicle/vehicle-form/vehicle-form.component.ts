import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

//Forms
import { VehicleModalFormComponent } from './vehicle-modal-form/vehicle-modal-form.component';

@Component({
  selector: 'vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: []
})
export class VehicleFormComponent implements OnInit {

  @Input() id:number = null;
  @Output() success = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

  admVehicle(){ 
    const dialogRef = this.dialog.open(VehicleModalFormComponent, { data: {
      id:this.id
    },disableClose:true });
		dialogRef.afterClosed().subscribe(res => {
			if (!res) {
				return;
      }
      if(this.success){
        this.success.emit(res);
      }
		});

  }

}