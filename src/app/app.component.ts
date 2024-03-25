import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {StepperOrientation} from '@angular/material/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AsyncPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';


import { map } from 'rxjs';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AsyncPipe, ImageUploaderComponent, MatDatepickerModule,RouterOutlet, ReactiveFormsModule,MatInputModule, MatFormField, FormsModule, MatIconModule, MatStepperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class AppComponent {
  title = 'project-gyn';
  value = this.title
  dossier_id = signal(1);

  addDossier = ()=>{

    this.dossier_id.update(value => value + 1)
  }
  stepperOrientation: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  })



  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
