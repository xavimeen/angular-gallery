import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhotoService} from '../../services/photo.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: []
})
export class PhotoFormComponent implements OnInit {

  file: File;
  fotoSeleccionad: string | ArrayBuffer;

  constructor(private _ps: PhotoService, private router: Router) { }

  ngOnInit(): void {
  }

  fotoSeleccionada(evento: HtmlInputEvent) {
    if(evento.target.files && evento.target.files[0]) {
      this.file = <File>evento.target.files[0];
      // Image preview
      const reader = new FileReader();
      reader.onload = e => this.fotoSeleccionad = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirFoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean {
    this._ps.crearFoto(titulo.value, descripcion.value, this.file)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos']);
      } , error => console.log(error));
    return false;
  }

}
