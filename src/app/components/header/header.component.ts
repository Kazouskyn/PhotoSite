import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedValue: string | undefined;
  shopChoices: string[] = [
    'Prints',
    'Backgrounds'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
