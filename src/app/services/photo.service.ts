import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // Conectado al servidor local, en desarrollo
  private URI = 'http://localhost:3000/api/photos/';

  constructor(private http: HttpClient) { }

  crearFoto(titulo: string, descripcion: string, foto: File) {
    const formData = new FormData();
    formData.append('title', titulo);
    formData.append('description', descripcion);
    formData.append('image', foto);

    return this.http.post(this.URI, formData);
  }

  getFotos() {
    return this.http.get<Photo[]>(this.URI);
  }

  getFoto(id: string) {
    return this.http.get<Photo>(this.URI + id);
  }

  updateFoto(id: string, title: string, description: string) {
    return this.http.put(this.URI + id, {title, description});
  }

  deleteFoto(id: string) {
    return this.http.delete(this.URI + id);
  }

}
