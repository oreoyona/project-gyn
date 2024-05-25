import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassiqueService {
  saveUrl = "/api/dossier-classique"
  saveTheForm(form: any){
    console.log(form)
    return this.http.post(this.saveUrl, form)
  }

  constructor(private http: HttpClient) { }
}
