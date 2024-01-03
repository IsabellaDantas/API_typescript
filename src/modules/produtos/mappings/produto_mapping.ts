import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoEntity } from "../entities/produto.entity";

export class ProdutosMapping {
    static from(produto: ProdutosDTO): ProdutosEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: produto.quantidade,
            imagem: produto.imagem
        }
    }
}