import { Component, OnInit } from '@angular/core';
import { CABALLOS } from 'src/app/listaCaballos';

@Component({
  selector: 'app-lista-caballos',
  templateUrl: './lista-caballos.component.html',
  styleUrls: ['./lista-caballos.component.css']
})
export class ListaCaballosComponent implements OnInit {
  caballos = CABALLOS;

  constructor() { }

  ngOnInit(): void {
  }

}
