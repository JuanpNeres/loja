import { CaracteristicaProdutoDTO, ImagemProdutoDTO } from "./dto/criaProduto.dto";

export class ProdutoEntity {
    id: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagem: ImagemProdutoDTO[];
    categoria: string
}