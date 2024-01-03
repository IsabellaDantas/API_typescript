import { ProdutosDTO } from "../dtos/produto.dto";
import { ProdutosMapping } from "../mappings/produto.mapping";
import { ProdutosRepository } from "../repositories/produto.repository";

export class UpdateProdutoService {
    constructor(private readonly produtoRepository: ProdutosRepository) {}
    async execute(id: number, data: ProdutosDTO): Promise<void> {
        const produto = ProdutosMapping.from(data)
        await this.produtoRepository.update(id, produto)
    }
}