import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  titulo = 'CaelumPic'
  listaFotos = []
  
  constructor(ajax: Http){
    ajax.get("http://localhost:3000/v1/fotos").subscribe
    (resposta => {this.listaFotos = resposta.json()
    }) 
  }

  ngOnInit() {
  }

}
