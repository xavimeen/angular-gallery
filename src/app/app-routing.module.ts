import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';


const routes: Routes = [
  {path: 'photos', component: PhotoListComponent},
  {path: 'photo/new', component: PhotoFormComponent},
  {path: 'photo/:id', component: PhotoPreviewComponent},
  {path: '**', pathMatch: 'full',  redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
