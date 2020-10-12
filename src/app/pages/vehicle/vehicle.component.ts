import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

//Services
import {VehicleService} from '../../services/vehicle.service';
import { TableDataSourceService } from '../../services/table-data-source.service';


@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class VehicleComponent implements AfterViewInit,OnInit {

  displayedColumns = ['id','plate','vehicle_type','brand','color','third_party_owner','third_party_driver','actions'];
  dataSource: TableDataSourceService;

  
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;


  filter:any = {    
    plate:'',
    brand:'',
    color:'',
    third_party_owner:'',
    third_party_driver:'',
  };  

  constructor(
    public vehicleService: VehicleService
  ) {
  }

	ngOnInit() {    
    this.dataSource = new TableDataSourceService(this.vehicleService,this.paginator,this.sort,this.filter);
  }

  ngAfterViewInit() {
    this.dataSource.initPaginator();
  }
}

