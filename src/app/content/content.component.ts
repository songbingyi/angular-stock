import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = 'welcome';
  pageDesc = '';
  constructor(public router: Router) {
    // pipe filter过滤所有事件中路由结束的事件
    // subscribe 订阅事件触发后执行函数
    router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    if (event.url === '/dashboard') {
      this.pageTitle = '这是首页';
      this.pageDesc = 'index';
    } else if (event.url.startsWith('/stock')) {
      this.pageTitle = 'Stock Manager';
      this.pageDesc = '对股票进行增删改查';
    }
  });
  }

  ngOnInit() {
  }

}
