import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'cp-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})

export class CadastroComponent implements OnInit {

  foto = new FotoComponent()


  constructor(private ajax: HttpClient) { }

  ngOnInit() {

  }

  salvar() {
    const opcoesHttp = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    this.ajax.post(
      'http://localhost:3000/v1/fotos'
      , JSON.stringify(this.foto)
      , opcoesHttp
    )

      .subscribe(
        () => this.foto = new FotoComponent()
        , erro => console.log(erro)
      )
  }
}
