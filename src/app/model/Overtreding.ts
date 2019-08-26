export class Overtreding {
    id:number;
    datum_vastelling_jaar:string;
    datum_vaststelling_maand:string;
    datum_vaststelling:string;
    opnameplaats_straat:string;
    opnameplaats_rijrichting_gaand:string;
    opnameplaats_zone_snelheid:string;
    aantal_passanten:string;
    aantal_overtredingen_snelheid:string;
    aantal_overtredingen_roodlicht:string;
  
      constructor(id: number, datum_vastelling_jaar:string, datum_vaststelling_maand:string, datum_vaststelling:string, opnameplaats_straat:string, 
        opnameplaats_rijrichting_gaand:string, opnameplaats_zone_snelheid:string, aantal_passanten:string, aantal_overtredingen_snelheid:string,
        aantal_overtredingen_roodlicht:string) {
        this.id = id;
        this.datum_vastelling_jaar = datum_vastelling_jaar;
        this.datum_vaststelling_maand = datum_vaststelling_maand;
        this.datum_vaststelling = datum_vaststelling;
        this.opnameplaats_straat = opnameplaats_straat;
        this.opnameplaats_rijrichting_gaand = opnameplaats_rijrichting_gaand;
        this.opnameplaats_zone_snelheid = opnameplaats_zone_snelheid;
        this.aantal_passanten = aantal_passanten;
        this.aantal_overtredingen_snelheid = aantal_overtredingen_snelheid;
        this.aantal_overtredingen_roodlicht = aantal_overtredingen_roodlicht;
    }
    }
    