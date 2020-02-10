import { Component, OnInit, InputDecorator, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {

 @Input() public product;
 @Output() notify = new EventEmitter();

  constructor() { }


}