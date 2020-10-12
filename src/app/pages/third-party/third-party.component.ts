import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

//Services
import {ThirdPartyService} from '../../services/third_party.service';
import { TableDataSourceService } from '../../services/table-data-source.service';


@Component({
  selector: 'third-party',
  templateUrl: './third-party.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class ThirdPartyComponent implements AfterViewInit,OnInit {

  displayedColumns = ['id','identification','full_name','phone','address','city','actions'];
  dataSource: TableDataSourceService;

  
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;


  filter:any = {    
    identification:'',
    name:'',
    phone:'',
    address:'',
  };  

  constructor(
    public thirdPartyService: ThirdPartyService
  ) {
  }

	ngOnInit() {    
    this.dataSource = new TableDataSourceService(this.thirdPartyService,this.paginator,this.sort,this.filter);
  }

  ngAfterViewInit() {
    this.dataSource.initPaginator();
  }
}

