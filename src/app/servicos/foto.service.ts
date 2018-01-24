import{ HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FotoComponent} from '../foto/foto.component';
import { Injectable } from '@angular/core';





@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos'
    private opcoesHttp = {headers: new HttpHeaders({'Content-Type':'application/json'})}

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Object>{
        return this.conexaoApi.get(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<object> {
        return this.conexaoApi.post( 
                                    this.url
                                    ,JSON.stringify(foto)
                                    ,this.opcoesHttp
                                )
    }

    deletar(){}

    consultar(){}

    alterar(){}

}