import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { AddComponent } from '../add/add.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DataComponent } from '../data/data.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, AddComponent, MatCardModule, MatIconModule, MatButtonModule, DataComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  navigateToAdd(){
    this.route.navigateByUrl("/add")
  }


  constructor(private route: Router){

  }

}
