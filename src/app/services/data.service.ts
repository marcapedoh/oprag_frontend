import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost"

  loadData(element:string){
    return this.httpClient.get<any>(this.baseUrl+":8080/OPRAG/v0/endpoint/"+element+"/all");
  }

  createObject(element:string,obj:any){
    return this.httpClient.post<any>(this.baseUrl+":8080/OPRAG/v0/endpoint/"+element+"create",obj);
  }
}
