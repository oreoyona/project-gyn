import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [ MatCardModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
 file!: File;
 files: File[] = []
 filename = ""
 filenames = []
 uploadFile(event: any){

  const uploadedFiles: any = event?.target?.files;
 
  for (let file of uploadedFiles){
    this.files.push(file)
  }
 
  
 }
}
