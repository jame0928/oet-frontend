import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Guards
import { AuthGuard } from '../guards/auth.guard';

//Components
import { PagesComponent } from './pages.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
    { 
        path: 'home', 
        component: PagesComponent,
        canActivate:[AuthGuard],
        children: [
            { path: 'third-party', component: ThirdPartyComponent },
            { path: 'vehicle', component: VehicleComponent },
            { path: '', redirectTo: 'third-party', pathMatch: 'full'},
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


