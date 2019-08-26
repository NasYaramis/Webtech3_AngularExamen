import { Component, OnInit } from '@angular/core';
import { OvertredingenService } from 'src/app/services/overtredingen.service';
import { Overtreding } from 'src/app/model/Overtreding';

@Component({
  selector: 'app-overtredingen',
  templateUrl: './overtredingen.component.html',
})
export class OvertredingenComponent implements OnInit {

  overtredingen: Overtreding[];

  constructor(private overtredServ : OvertredingenService) { }

  ngOnInit() {
    this.getAllOvertredingen();
  }

  getAllOvertredingen() {
    this.overtredServ.loadOvertredingFromJson().subscribe(data =>{
      this.overtredingen = data;
      
      this.overtredingen.sort((a,b) =>{
        if(a.datum_vaststelling < b.datum_vaststelling) return -1;
        else if (a.datum_vaststelling > b.datum_vaststelling) return 1;
        else return 0;
      });

      this.overtredingen.sort((a,b) =>{
        if(a.opnameplaats_straat < b.opnameplaats_straat) return -1;
        else if (a.opnameplaats_straat > b.opnameplaats_straat) return 1;
        else return 0;
      });
    })
  }
}
