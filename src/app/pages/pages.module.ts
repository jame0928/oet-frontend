import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

//Routing module
import { PagesRoutingModule } from './pages.routing';

// Application modules
import { SharedModule } from '../shared/shared.module';


//Components
import { PagesComponent } from './pages.component';

//THRID PARTIES COMPONENTS
import { ThirdPartyComponent } from './third-party/third-party.component';
import { ThirdPartyFormComponent } from './third-party/third-party-form/third-party-form.component';
import { ThirdPartyModalFormComponent } from './third-party/third-party-form/third-party-modal-form/third-party-modal-form.component';

//VEHICLES COMPONENTS
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleFormComponent } from './vehicle/vehicle-form/vehicle-form.component';
import { VehicleModalFormComponent } from './vehicle/vehicle-form/vehicle-modal-form/vehicle-modal-form.component';






@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    PagesRoutingModule,  
    FormsModule,    
    ReactiveFormsModule,  
        
    MatTableModule,
    MatPaginatorModule,
		MatSortModule,
    MatCheckboxModule,    
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  declarations: [
    PagesComponent,
    ThirdPartyComponent,
    ThirdPartyFormComponent,
    ThirdPartyModalFormComponent,

    VehicleComponent,
    VehicleFormComponent,
    VehicleModalFormComponent
  ],
  exports: [
    PagesComponent,
  ],
  
})
export class PagesModule { }
