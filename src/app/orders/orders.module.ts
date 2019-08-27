import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

// Material Components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    // Material 
    MatTabsModule,
  ]
})
export class OrdersModule { }
