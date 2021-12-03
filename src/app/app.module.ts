import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';

import { AppMaterialModule } from './shared/app-material/app-material.module';
import { LivroModule } from './components/views/livro/livro.module';
import { CategoriaModule } from './components/views/categoria/categoria.module';
import { LoginComponent } from './components/template/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CategoriaModule,
    LivroModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent
  ]
})
export class AppModule { }
