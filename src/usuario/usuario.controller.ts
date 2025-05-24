import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/atualizaUsuario.dto copy";



@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);

        return { 
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Uusário criado com sucesso'
         };
    }

    @Get()
    async listaUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        )

        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO ) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso'
        }
    }
} 