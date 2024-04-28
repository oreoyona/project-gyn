import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormGroupName, FormArray, FormBuilder } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-dossier-classique',
  standalone: true,
  imports: [ReactiveFormsModule, MatCheckboxModule, CommonModule, MatFormField, MatStepperModule, MatLabel, MatInputModule],
  templateUrl: './dossier-classique.component.html',
  styleUrl: './dossier-classique.component.scss'
})
export class DossierClassiqueComponent {

  DossierClassique = new FormGroup({
    AnamneseFormGroup: new FormGroup({
      plainte: new FormControl(''),
      histoire: new FormControl(''),
      antecedants: new FormControl(''),
      complement: new FormControl('')
    }),

    ExamenPhysiqueFormGroup: new FormGroup({
      teteCou: this._formBuilder.group({
        cbi: false,
        cpp: false,
        deshydratee: false
      }),
      thorax: this._formBuilder.group({
        asymetrique: false,
        polypnee: false,
        tachycardie: false,
        souffleCardiaque: false,
        crepitants: false


      }),
      abdomen: new FormControl(''),
      ms: new FormControl(''),
      mi: new FormControl(''),
      oge: new FormControl(''),
      autres: new FormControl('')
    }),


    ExamenGynFormGroup: new FormGroup({
      tv: new FormControl(''),
      speculum: new FormControl(''),
    }),

    Diagnostic : new FormControl(''),

    paracliniqueForm: new FormControl('')

  })


constructor(private _formBuilder: FormBuilder){}

}
