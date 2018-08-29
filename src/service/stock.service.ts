import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }
  private stocks: Stock[] =  [
    new Stock(1, '第1只股票', 5.5, 3.5, '这是我的第1只股票', ['it', '互联网']),
    new Stock(2, '第2只股票', 6.6, 3.5, '这是我的第2只股票', ['金融', '互联网']),
    new Stock(3, '第3只股票', 1.5, 3, '这是我的第3只股票', ['石油', '互联网']),
    new Stock(4, '第4只股票', 0.5, 1, '这是我的第4只股票', ['房地产', '互联网']),
    new Stock(5, '第5只股票', 1.8, 5, '这是我的第5只股票', ['监控', '互联网'])
  ];
  getStocks(): Stock[] {
    return this.stocks;
  }
  getStock(id: number): Stock {
    return this.stocks.find(stock => stock.id === id);
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {
  }
}
