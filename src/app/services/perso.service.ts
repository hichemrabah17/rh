import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class PersoService {

  constructor(private http: HttpClient,private endpoint: EndpointService) { }
  add(perso: any) {
    return this.http.post(this.endpoint.url + 'RHproject/api/donneesperso', perso);
  }
  getall(){
    return this.http.get(this.endpoint.url + 'RHproject/api/donneesperso/Alldonnees');
  }
  getbyid(id : any){
    return this.http.get(this.endpoint.url + 'RHproject/api/donneesperso/'+id);
  }

}
