import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

 
 export class CriaUsuarioDTO{

    @IsNotEmpty()
    nome: String;

    @IsEmail()
    email: String;

    @MinLength(6)
    senha: String;
 }