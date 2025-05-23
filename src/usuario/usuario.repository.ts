import { Injectable } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository{

    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }

    async listar(){
        return this.usuarios;
    }

    async existeComEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email,
        );

        return possivelUsuario !== undefined;
    }
}