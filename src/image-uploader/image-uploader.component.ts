import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  @Output() filesUploaded = new EventEmitter();
  file!: File;
  files: File[] = []
  filename = ""
  filenames = []
  uploadFile(event: any) {
    const uploadedFiles: any = event?.target?.files;
    for (let file of uploadedFiles) {
      this.files.push(file)
    }
    this.filesUploaded.emit(this.files);
  }
}
