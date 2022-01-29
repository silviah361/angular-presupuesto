import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  escondido = true;
  constructor() { }

  ngOnInit(): void {
  }

pulsado (){
    this.escondido = ! this.escondido;
}

enviar(){
  alert('Gracias por tu opinión');
}
}
