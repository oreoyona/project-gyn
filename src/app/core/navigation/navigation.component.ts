import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, ActivationEnd, Navigation, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatRippleModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{

  @ViewChild('home') homeIcon!: any;
  @ViewChild('add') addIcon!: any;
  @ViewChild('list') listIcon!: any;

  @ViewChild('homeB') home!: MatIcon;
  @ViewChild('addB') add!: any;
  @ViewChild('listB') list!: any;

  changeActiveRoute(element: RouterLinkActive){
  // find the activated route

}


  constructor(private router: Router, private ar: ActivatedRoute) { }

}
