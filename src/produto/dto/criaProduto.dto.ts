import { Type } from "class-transformer";
import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsUrl, IsUUID, ValidateNested } from "class-validator";

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

export class CriaProdutoDTO{

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    usuarioId: string;

    @IsNotEmpty()
    nome: String;

    @IsNumber()
    @IsPositive()
    valor: number;

    @IsInt()
    quantidade: number;

    @IsNotEmpty()
    descricao: String;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @Type(() => ImagemProdutoDTO)
    imagem: ImagemProdutoDTO[];

    @IsNotEmpty()
    categoria: String
}

function IsNotZero(): (target: CriaProdutoDTO, propertyKey: "valor") => void {
    throw new Error("Function not implemented.");
}

