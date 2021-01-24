import { Component, Input, OnInit } from '@angular/core';
import {ConnectionService} from 'src/app/connection.service';
@Component({
  selector: 'app-add-edit-doc',
  templateUrl: './add-edit-doc.component.html',
  styleUrls: ['./add-edit-doc.component.css']
})
export class AddEditDocComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  @Input() doc:any;
  DocumentId:number;
  Typedocument:string;
  dateDemande:string;
  etat:string;
  Utilisateur:number;

  ngOnInit(): void {

    this.Typedocument=this.doc.Typedocument;
    this.dateDemande=this.dateDemande;
    this.etat=this.etat;
    this.Utilisateur=this.Utilisateur;
  }

  addDocument(){
    console.log(this.Typedocument)
    var val = {
                Typedocument:this.Typedocument,
                etat:'attente',
                Utilisateur:1,
                dateDemande:this.dateDemande};
    this.service.addDocument(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDocument(){
    var val = {DocumentId:this.DocumentId,
      Typedocument:this.Typedocument,
      etat:'attente',
      dateDemande:this.dateDemande};
    this.service.updateDocument(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
