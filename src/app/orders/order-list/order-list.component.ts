import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import myData from '../../../assets/data/products.json';

let ELEMENT_DATA = [];
ELEMENT_DATA = myData;



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
}

  selectAll() {
    for (const elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }

  deleteData(deleteddata: object) {
    const index: number = ELEMENT_DATA.indexOf(deleteddata);
    if (index !== -1) {
        ELEMENT_DATA.splice(index, 1);
    }
}



}
