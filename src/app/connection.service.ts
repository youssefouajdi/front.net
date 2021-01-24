import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly APIUrl="http://localhost:54075/api";

  constructor(private http:HttpClient) { }

  getDocList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Document');
  }

  addDocument(val:any){
    return this.http.post<any>(this.APIUrl+'/Document',val);
  }

  updateDocument(val:any){
    return this.http.put<any>(this.APIUrl+'/Document',val);
  }
  deleteDocument(val:any){
    return this.http.delete<any>(this.APIUrl+'/Document/'+val);
  }

  getUtlList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Utilisateur');
  }

  addUtilisateur(val:any){
    return this.http.post<any>(this.APIUrl+'/Utilisateur',val);
  }

  updateUtilisateur(val:any){
    return this.http.put<any>(this.APIUrl+'/Utilisateur',val);
  }
  deleteUtilisateur(val:any){
    return this.http.delete<any>(this.APIUrl+'/Utilisateur/'+val);
  }

  GetAllUtilisateurNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Utilisateur/GetAllUtilisateurNames');
  }
}
