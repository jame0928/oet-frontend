import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

//Forms
import { ThirdPartyModalFormComponent } from './third-party-modal-form/third-party-modal-form.component';

@Component({
  selector: 'third-party-form',
  templateUrl: './third-party-form.component.html',
  styleUrls: []
})
export class ThirdPartyFormComponent implements OnInit {

  @Input() id:number = null;
  @Output() success = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

  admThirdParty(){ 
    const dialogRef = this.dialog.open(ThirdPartyModalFormComponent, { data: {
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