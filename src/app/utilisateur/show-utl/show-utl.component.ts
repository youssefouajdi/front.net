import { Component, OnInit } from '@angular/core';
import {ConnectionService} from 'src/app/connection.service';
@Component({
  selector: 'app-show-utl',
  templateUrl: './show-utl.component.html',
  styleUrls: ['./show-utl.component.css']
})
export class ShowUtlComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  UtilisateurList:any=[];

  ModalTitle:string;
  ActivateAddEditUtlComp:boolean=false;
  utl:any;


  UtilisateurListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshdocList();
  }

  addClick1(){
    console.log("test")
    this.utl={
      UtilisateurId:0,
    nom:"",
    prenom:"",
    apogee:"",
    CIN:"",
    emai:""
    }
    this.ModalTitle="Ajouter Utilisateur";
    this.ActivateAddEditUtlComp=true;

  }

  editClick(item){
    this.utl=item;
    this.ModalTitle="Modifier utilisateur";
    this.ActivateAddEditUtlComp=true;
  }

  deleteClick(item){
    if(confirm('Vous etes sur??')){
      this.service.deleteUtilisateur(item.UtilisateurId).subscribe(data=>{
        alert(data.toString());
        this.refreshdocList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUtlComp=false;
    this.refreshdocList();
  }


  refreshdocList(){
    this.service.getUtlList().subscribe(data=>{
      this.UtilisateurList=data;

    });
  }

}
