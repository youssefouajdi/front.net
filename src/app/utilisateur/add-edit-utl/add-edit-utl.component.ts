import { Component, Input, OnInit } from '@angular/core';
import {ConnectionService} from 'src/app/connection.service';
@Component({
  selector: 'app-add-edit-utl',
  templateUrl: './add-edit-utl.component.html',
  styleUrls: ['./add-edit-utl.component.css']
})
export class AddEditUtlComponent implements OnInit {

  constructor(private service:ConnectionService) { }


  @Input() utl:any;
  UtilisateurId:number;
  nom:string;
  prenom:string;
  email:string;
  CIN:string;
  apogee:string;

  ngOnInit(): void {
    this.UtilisateurId=this.UtilisateurId;
    this.nom=this.nom;
    this.prenom=this.prenom;
    this.apogee=this.apogee;
    this.CIN=this.CIN;
    this.email=this.email;
  }

  addUtilisateur(){
    var val = {
      nom:this.nom,
      prenom:this.prenom,
      apogee:this.apogee,
      CIN:this.CIN,
      email:this.email};
    this.service.addUtilisateur(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUtilisateur(){
    var val = {UtilisateurId:this.UtilisateurId,
      nom:this.nom,
      prenom:this.prenom,
      apogee:this.apogee,
      CIN:this.CIN,
      email:this.email};
    this.service.updateUtilisateur(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
