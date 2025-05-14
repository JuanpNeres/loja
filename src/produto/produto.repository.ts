import { Injectable } from "@nestjs/common";


@Injectable()
export class ProdutoRepository{

    private produtos = [String];

    async salvar(produto){
        this.produtos.push(produto);
        console.log(this.produtos);
    }

    async listar(){
        return this.produtos;
    }
}