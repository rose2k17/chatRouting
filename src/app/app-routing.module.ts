import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InsertarComponent } from './insertar/insertar.component';


const routes: Routes = [
  {
    path: 'blogs',
    component: BlogComponent,
    data: { title: 'Book List' }

  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'contactos',
    component: ContactoComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home List' }

  },
  {
    path: 'insertar',
    component: InsertarComponent,
    data: { title: 'insertar' }

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    BlogComponent,
    ServiciosComponent,
    ContactoComponent
  ]
})
export class AppRoutingModule { }
