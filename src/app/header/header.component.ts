import { Component, OnInit } from '@angular/core';
import { HEADER_ITEMS } from '../config';
import { HEADER_ITEM_TYPE } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: HEADER_ITEM_TYPE[];
  ngOnInit() {
    this.items = HEADER_ITEMS;
  }


  constructor(private router: Router) {}

  navigate(path : string): void {
    console.log(`navigating to ${path}`)
    this.router.navigate([path]);
  }
}
