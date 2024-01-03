import { ProdutosDTO } from "../dtos/produtos.dto";
import { ProdutosRepository } from "../repositories/produtos.repository";
import { ProdutosMapping } from '../mappings/produto.mapping';

export class CreateProdutoService {
    constructor(private readonly produtoRepository: ProdutosRepository) {}
    async execute(data: ProdutosDTO): Promise<void> {
        const produto = ProdutosMapping.from(data)
        const resposta = await this.produtoRepository.create(produto)
    }
}