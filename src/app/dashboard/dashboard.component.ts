import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { AddComponent } from '../pages/add/add.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DataComponent } from '../data/data.component';
import { NavigationComponent } from '../core/navigation/navigation.component';
import { DefaultMainComponent } from '../pages/default-main/default-main.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, AddComponent, MatCardModule, MatIconModule, MatButtonModule,
    DataComponent, NavigationComponent, RouterOutlet, AddComponent, RouterModule, DefaultMainComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  navigateToAdd() {
    this.route.navigateByUrl("/add")
  }


  constructor(private route: Router) {

  }

}
