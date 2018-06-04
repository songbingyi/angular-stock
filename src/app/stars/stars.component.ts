import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  rating: number;
  stars: Array<boolean>;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {

      this.stars.push(this.rating < i);
    }
  }

}
