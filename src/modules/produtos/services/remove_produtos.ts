import { ProdutosRepository } from "../repositories/produto.repository";

export class RemoveProdutoService {
    constructor(private readonly produtosRepository: ProdutosRepository) {}
    async execute(id: number): Promise<void> {
        await this.produtosRepository.delete(id)
    }
}