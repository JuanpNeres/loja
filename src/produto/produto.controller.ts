import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/criaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { ListaProdutoDTO } from "./dto/listaProduto.dto";
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from "./dto/atualizaProduto.dto";


@Controller('/produtos')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}

     @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO){
        const produtoEntity = new ProdutoEntity();

        produtoEntity.nome = dadosDoProduto.nome;
        produtoEntity.valor = dadosDoProduto.valor;
        produtoEntity.quantidade = dadosDoProduto.quantidade;
        produtoEntity.descricao = dadosDoProduto.descricao;
        produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
        produtoEntity.imagem = dadosDoProduto.imagem;
        produtoEntity.categoria = dadosDoProduto.categoria;
        produtoEntity.id = uuid();

        this.produtoRepository.salvar(produtoEntity);

        return{
            produto: new ListaProdutoDTO(produtoEntity.id, produtoEntity.nome),
            message: "Produto criado com sucesso"
        };
    }

    @Get()
    async listaProdutos(){
        return this.produtoRepository.listar();
    }

    @Put('/:id')
        async atualizaProduto(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO ) {
            const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);
    
            return{
                produto: produtoAtualizado,
                message: 'Produto atualizado com sucesso'
            }
        }

        @Delete('/:id')
            async removeProduto(@Param('id') id: string) {
                    const produtoRemovido = await this.produtoRepository.remove(id);
        
                    return {
                        produto: produtoRemovido,
                        message: 'Produto removido com sucesso'
                    }
            }
}
