import { ProdutosDTO } from "../dtos/produtos.dto";
import { CreateProdutosService } from "../services/create-produto.service";
import { Request, Response } from "express";

export class CreateProdutoController {
    constructor(private readonly service: CreateProdutosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const produto = <ProdutosDTO>request.body
        await this.service.execute(produto)
        return response.json({ message: "Produto criado "})
    }
}