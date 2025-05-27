import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/emailUnico.validator";

 
 export class AtualizaUsuarioDTO{

    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsEmail(undefined)
    @EmailUnico({ message: 'Já existe um usuário com este e-mail'})
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    senha: string;
 }