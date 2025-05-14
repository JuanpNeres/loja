import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository{

    private usuarios = [String];

    async salvar(usuario){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }

    async listar(){
        return this.usuarios;
    }
}