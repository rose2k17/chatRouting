import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Book List' }

  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { title: 'Book List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    BlogComponent,
    ServiciosComponent,
    ContactoComponent
  ]
})
export class AppRoutingModule { }
