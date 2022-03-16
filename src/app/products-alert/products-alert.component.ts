import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.css'],
})
export class ProductsAlertComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}
}
