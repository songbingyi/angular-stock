import { Component, OnInit } from '@angular/core';
import { Stock } from '../../service/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(5, '第5只股票', 1.8, 5, '这是我的第5只股票', ['监控', '互联网']);
  }

}
