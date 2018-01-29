import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cp-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})

export class CadastroComponent implements OnInit {

    foto = new FotoComponent()

    constructor(private servico: FotoService,
                private rota: ActivatedRoute) {
                    console.log(rota)
     }

    ngOnInit() { }

    salvar() {
        this.servico
            .cadastrar(this.foto)
            .subscribe(
            () => this.foto = new FotoComponent()
            , erro => console.log(erro)
            )
    }

}
