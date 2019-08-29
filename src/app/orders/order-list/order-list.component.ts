import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: 'new Socks',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 50,
    description: 'new Shoes',
    isChecked: false
  },
];


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



}
