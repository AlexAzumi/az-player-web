// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxMdModule } from 'ngx-md';
// Servicios
import { RepositoryService } from './services/repository/repository.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { DownloadComponent } from './components/download/download.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/global/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ChangelogComponent,
    DownloadComponent,
    SupportComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    NgxMdModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
