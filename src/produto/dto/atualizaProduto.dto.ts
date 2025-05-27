import { Type } from "class-transformer";
import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsUrl, IsUUID, ValidateNested } from "class-validator";

export class CaracteristicaProdutoDTO{

    @IsNotEmpty()
    nome: String;

    @IsNotEmpty()
    descricao: String
} 

export class ImagemProdutoDTO{

    @IsUrl()
    url: String;

    @IsNotEmpty()
    descricao: String
}

export class AtualizaProdutoDTO{

    // @IsUUID(undefined, { message: 'ID de usuário inválido' })
    // usuarioId: string;

    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    valor: number;

    @IsInt()
    @IsOptional()
    quantidade: number;

    @IsNotEmpty()
    @IsOptional()
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicaProdutoDTO)
    @IsOptional()
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImagemProdutoDTO)
    @IsOptional()
    imagem: ImagemProdutoDTO[];

    @IsNotEmpty()
    @IsOptional()
    categoria: string
}