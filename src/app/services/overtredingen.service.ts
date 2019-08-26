import { Injectable } from '@angular/core';
import { Overtreding } from '../model/Overtreding';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OvertredingenService {

  overtredingen: Overtreding[] = [];
  overurl: string = 'http://localhost:4200/assets/overtredingen.json';

  constructor(private http: HttpClient) {
    this.loadOvertredingFromJson().subscribe();
   }

   loadOvertredingFromJson(): Observable<any>{
     console.log(1, 'load from json is called');
     return this.http.get<any[]>(this.overurl);
   }

   findStreet(straatnaam:string):Overtreding[]{
     let gevondenOvertredingen: Overtreding[] = [];
     
     for(let i = 0; i < this.overtredingen.length; i++){
       if(this.overtredingen[i].opnameplaats_straat == straatnaam){
         gevondenOvertredingen.push(this.overtredingen[i]);
         console.log('Gevonden overtredingen: ' + gevondenOvertredingen);
       }else{
         console.log('geen overtredingen gevonden');
       }
     }
     return gevondenOvertredingen;
   }

   findSpeed(snelheid:string):Overtreding[]{
    let gevondenOvertredingen: Overtreding[] = [];
    
    for(let i = 0; i < this.overtredingen.length; i++){
      if(this.overtredingen[i].aantal_overtredingen_snelheid >= snelheid){
        gevondenOvertredingen.push(this.overtredingen[i]);
        console.log('Gevonden overtredingen: ' + gevondenOvertredingen);
      }else{
        console.log('geen overtredingen gevonden');
      }
    }
    return gevondenOvertredingen;
  }
}
