import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import myData from '../../../assets/data/products.json';




@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  dataTable = myData;

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(this.dataTable);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for (const elm of this.dataTable) {
      elm.isChecked = !elm.isChecked;
    }
  }

  deleteData(deleteddata: object) {
    debugger
    this.dataTable = this.dataSource.data.filter(ick => !ick.isChecked);
    this.dataSource =  new MatTableDataSource(this.dataTable);
  }



}
