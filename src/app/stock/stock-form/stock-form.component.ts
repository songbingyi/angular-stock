import { Component, OnInit} from '@angular/core';

import {  ActivatedRoute, Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  searchInfo: FormControl = new FormControl();
  name;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {
    this.searchInfo.valueChanges
    .pipe(debounceTime(500))
    .subscribe(
      d => {
        this.keyUp(d);
      }
      );
   }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    console.log(stockId);
    this.stock = this.stockService.getStock(stockId);
    console.log(this.stock);
  }
  keyUp(e) {
    console.log(e);
  }
  test(e) {
    console.log(e);
  }
  cancle() {
    this.router.navigate(['stock']);
  }
  save() {
    this.router.navigateByUrl('stock');
  }
}
