import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepper, MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ClassiqueService } from './classique.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImageUploaderComponent } from '../../../image-uploader/image-uploader.component';

@Component({
  selector: 'app-dossier-classique',
  standalone: true,
  imports: [ReactiveFormsModule, ImageUploaderComponent, MatDividerModule, AsyncPipe, MatAutocompleteModule, MatCheckboxModule, CommonModule, MatFormField, MatStepperModule, MatLabel, MatInputModule, MatButtonModule, HttpClientModule],
  templateUrl: './dossier-classique.component.html',
  styleUrl: './dossier-classique.component.scss',
  providers: [ClassiqueService]

})
export class DossierClassiqueComponent implements OnInit{
  @ViewChild('classiqueStepper') stepper!: any;
  @ViewChild(ImageUploaderComponent) uploader!: ImageUploaderComponent;
  options: string[] = ['Symétriques et Eutrophiques', 'Asymétriques', 'Frêles'];
  miOptions: string[] = [
    'Oedèmes indolores, prenant le godet',
    'Oedèmes douloureux, prenant le godet',
    'Oedèmes douloureux, prenant le godet avec Drapeau négatif et Homans positif',
  ]
  filteredOptions = new Observable<string[]>;
  filteredMiOptions = new Observable<string[]>;

  DossierClassique = new FormGroup({

    AnamneseFormGroup: new FormGroup({
      plainte: new FormControl('', [Validators.required]),
      histoire: new FormControl('', [Validators.required]),
      antecedents: new FormControl(''),
      complement: new FormControl('')
    }),

    ExamenPhysiqueFormGroup: new FormGroup({
      etatGeneral: new FormControl('', [Validators.required]),
      signesVitaux: new FormGroup({
        TA: new FormControl(''),
        FC: new FormControl(''),
        FR: new FormControl(''),
        T: new FormControl(''),
        Sat: new FormControl('')
      }, [Validators.required]),
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

    Diagnostic: new FormControl(''),

    paraclinique: this._formBuilder.group({
      images: this.uploader.filesUploaded.subscribe((e: any)=>{ return e})
    }),
    cat: new FormControl('')

  })
  orientation!: StepperOrientation;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkOrientation();
  
  }

  private checkOrientation(): void {
    if (window.innerWidth < 600) {

      this.orientation = 'vertical';
    } else {
      this.orientation = 'horizontal';
    }
  }

 

  save = (data: any) => {
    data = this.DossierClassique.value;
    this.classiqueService.saveTheForm(data)
  }
  constructor(private _formBuilder: FormBuilder, private classiqueService: ClassiqueService) { }
  ngOnInit(): void {
  

    window.innerHeight > 800?this.orientation='horizontal': this.orientation='vertical'

    this.filteredOptions = this.DossierClassique.get('ExamenPhysiqueFormGroup.ms')!.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '', this.options)))

    this.filteredMiOptions = this.DossierClassique.get('ExamenPhysiqueFormGroup.mi')!.valueChanges.pipe(
      startWith(''),
      map((v: any) => this._filter(v || '', this.miOptions)))

  }




  private _filter(value: string, options: string[]): string[] {
    const filterValue = String(value).toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}




