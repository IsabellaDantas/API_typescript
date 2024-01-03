import { ProdutosDTO } from "../dtos/produto.dto";
import { UpdateProdutosService } from "../services/update-produto.service";
import { Request, Response } from "express";

export class UpdateProdutoController {
    constructor(private readonly service: UpdateProdutosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <ProdutosDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Produto atualizado"})
    }
}