import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'


export interface DossierSommaire{
  dossier_id:  number,
  nom: string,
  age: number,
  formule_obstetricale: string,
  tv: string,
  paraclinique?:  Blob | File | any,
  diagnostic: string
}

const   ELEMENT_DATA: DossierSommaire[] = [
  {dossier_id: 1, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 2, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 3, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 4, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 5, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 6, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 7, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 8, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 9, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 10, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 11, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 12, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 13, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 14, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 15, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 16, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 17, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 18, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},
  {dossier_id: 19, nom: 'Annie Kadima', age: 27, formule_obstetricale: '1200', tv: 'col ant, dilate a 1cm', diagnostic: 'Dystocie de demarrage'},





]
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})

export class DataComponent {

  displayedColumns: string[] = ['nom', 'age', 'F.O', 'TV', 'Diagnostic'];
  dataSource = ELEMENT_DATA;

}
