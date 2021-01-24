import { Component, OnInit } from '@angular/core';
import {ConnectionService} from 'src/app/connection.service';
@Component({
  selector: 'app-show-doc',
  templateUrl: './show-doc.component.html',
  styleUrls: ['./show-doc.component.css']
})
export class ShowDocComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  DocumentList:any=[];

  ModalTitle:string;
  ActivateAddEditDocComp:boolean=false;
  doc:any;

  TypeDocument:string="";
  TypedocumentFilter:string="";
  DocumentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshdocList();
  }

  addClick(){
    this.doc={
      DocumentId:0,
      TypeDocument:""
    }
    this.ModalTitle="Ajouter document";
    this.ActivateAddEditDocComp=true;

  }

  editClick(item){
    this.doc=item;
    this.ModalTitle="Modifier Document";
    this.ActivateAddEditDocComp=true;
  }

  deleteClick(item){
    if(confirm('Vous etes sur??')){
      this.service.deleteDocument(item.DocumentId).subscribe(data=>{
        alert(data.toString());
        this.refreshdocList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDocComp=false;
    this.refreshdocList();
  }


  refreshdocList(){
    this.service.getDocList().subscribe(data=>{
      this.DocumentList=data;

    });
  }


}
