import { RemoveProdutosService } from "../services/remove-produto.service"
import { Request, Response } from "express"

export class RemoveProdutoController {
    constructor(private readonly service: RemoveProdutosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.service.execute(Number(id))
        return response.json({ message: "Produto removido" })
    }
}