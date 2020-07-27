import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  fotos = [];

  constructor(private _ps: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this._ps.getFotos()
      .subscribe( resp => {

        this.fotos = resp;
      
      }, error => console.log(error));
  }

  fotoSeleccionada(id: string) {
    this.router.navigate(['/photo', id]);
  }


}
