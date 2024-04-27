import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, ActivationEnd, Navigation, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { DossiersComponent } from '../dossiers/dossiers.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, MatButtonModule, MatRippleModule, RouterLink, RouterLinkActive, MatBottomSheetModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{
  @ViewChild('home') home!:any;
  openBottomSheet(): void {
    this._bottomSheet.open(DossiersComponent);
  }
  constructor(private _bottomSheet: MatBottomSheet) {
    
   }

}
