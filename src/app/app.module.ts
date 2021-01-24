import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DocumentComponent } from './document/document.component';
import { ShowDocComponent } from './document/show-doc/show-doc.component';
import { AddEditDocComponent } from './document/add-edit-doc/add-edit-doc.component';
import { ShowUtlComponent } from './utilisateur/show-utl/show-utl.component';
import { AddEditUtlComponent } from './utilisateur/add-edit-utl/add-edit-utl.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
;
import {ConnectionService} from'./connection.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    DocumentComponent,
    ShowDocComponent,
    AddEditDocComponent,
    ShowUtlComponent,
    AddEditUtlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
