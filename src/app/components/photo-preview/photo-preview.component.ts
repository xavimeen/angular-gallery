import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Photo} from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: []
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  foto: Photo;

  constructor(private _ps: PhotoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getFoto(this.id);
    })
  }

  getFoto(id: string) {
    this._ps.getFoto(id)
      .subscribe( resp => {
        this.foto = resp;
      }, error => console.log(error));
  }

  actualizarFoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this._ps.updateFoto(this.foto._id, title.value, description.value)
      .subscribe( resp => {
        console.log(resp);
        this.router.navigate(['/photos']);
      }, error => console.log(error));

    return false;
  }

  borrarFoto(id: string) {
    this._ps.deleteFoto(id)
      .subscribe( resp => {
        console.log(resp);
        this.router.navigate(['/photos']);
      }, error => console.log(error));
  }

}
