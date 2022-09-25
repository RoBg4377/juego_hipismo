import { Component, OnInit } from '@angular/core';
import {CABALLOS} from '../../listaCaballos' 

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {
  tuDinero: number=110;
  tuApuesta: number=0;
  tuCaballo: number= 0;
  ganador: number= 0;
  ganaste: boolean= false;
  perdiste: boolean= false;
  juega: boolean= true;
  caballo = CABALLOS;
  mostrarGanador= false;

  aceptar(event: Event){
    if((<HTMLInputElement>event.target).value === 'si'){
      this.juega = false
    }
    else {
      this.juega = true
    }
  }

  arrancan(): void{
   this.ganador = Math.floor(Math.random()*5)
   this.mostrarGanador= true
   if((this.ganador) +1 === this.tuCaballo){
    this.ganaste = true;
    this.perdiste = false;
    this.tuDinero= this.tuDinero + this.tuApuesta;

   }
   else {
    this.perdiste= true;
    this.ganaste = false;
    this.tuDinero= this.tuDinero - this.tuApuesta;
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
