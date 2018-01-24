import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  titulo = 'CaelumPic'
  listaFotos = []

  constructor(servico: FotoService) {
    servico.listar
    resposta => {
    this.listaFotos = resposta.json()
    }
  }

  ngOnInit() {
  }

}
