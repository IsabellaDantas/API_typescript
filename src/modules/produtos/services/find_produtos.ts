import { ProdutosEntity } from "../entities/produto.entity";
import { ProdutosRepository } from "../repositories/produto.repository";

export class FindProdutoService {
    constructor(private readonly produtoRepository: ProdutosRepository) {}
    async execute(id: number): Promise<ProdutosEntity> {
        const produto = await this.produtoRepository.findById(id)
        return produto
    }
}