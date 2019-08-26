import { Component, OnInit } from '@angular/core';
import { Overtreding } from 'src/app/model/Overtreding';
import { OvertredingenService } from 'src/app/services/overtredingen.service';

@Component({
  selector: 'app-zoek-overtredingen',
  templateUrl: './zoek-overtredingen.component.html',
})
export class ZoekOvertredingenComponent implements OnInit {
  straatnaam: string;
  snelheid: string;
  foundOvertreding: Overtreding[];
  found: boolean = false;

  constructor(private overtredServ : OvertredingenService) { }

  ngOnInit() {
  }

  findByStreet(){
    this.straatnaam = this.straatnaam;
    console.log('Te zoeken straatnaam: ' + this.straatnaam);

    this.foundOvertreding = this.overtredServ.findStreet(this.straatnaam);
    if(this.foundOvertreding.length > 0){
      this.found =true;
    }
  }

  findBySpeed(){
    this.snelheid = this.snelheid;
    console.log('Te zoeken minimum snelheid: ' + this.snelheid);

    this.foundOvertreding = this.overtredServ.findSpeed(this.snelheid);
    if(this.foundOvertreding.length > 0){
      this.found =true;
    }
  }

}
