import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute } from '@angular/router';
import { Stock, StockService } from '../stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    console.log(stockId)
    this.stock = this.stockService.getStock(stockId);
    console.log(this.stock)
  }
}