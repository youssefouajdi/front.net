import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DocumentComponent } from './document/document.component';
const routes: Routes = [
  {path:'utilisateur',component:UtilisateurComponent},
{path:'document',component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
