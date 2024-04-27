import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatListModule, MatNavList } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-dossiers',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatNavList, RouterLink],
  templateUrl: './dossiers.component.html',
  styleUrl: './dossiers.component.scss'
})
export class DossiersComponent {
  changeRoute(){
    this.dialogRef.dismiss()
    this.route.navigateByUrl("classique");
    
  }
  openBottomSheet(){

  }
  openLink(event: MouseEvent): void {
    this.dialogRef.dismiss();
    event.preventDefault();
  }
 constructor(private dialogRef: MatBottomSheetRef<DossiersComponent>, private route: Router){

 }
}
