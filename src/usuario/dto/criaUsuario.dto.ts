import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/emailUnico.validator";

 
 export class CriaUsuarioDTO{

    @IsNotEmpty()
    nome: string;

    @IsEmail(undefined)
    @EmailUnico({ message: 'Já existe um usuário com este e-mail'})
    email: string;

    @MinLength(6)
    senha: string;
 }