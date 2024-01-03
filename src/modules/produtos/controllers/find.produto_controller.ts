import { FindOneProdutosService } from "../services/find-one-produto.service";
import { Request, Response } from "express"

export class FindProdutoController {
    constructor(private readonly service: FindOneProdutosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const produto = await this.service.execute(Number(id))
        return response.json(produto)
    }
}