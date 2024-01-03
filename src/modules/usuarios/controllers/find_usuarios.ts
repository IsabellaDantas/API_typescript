import { FindUsuariosService } from "../services/find-one-usuario.service";
import { Request, Response } from "express";

export class FindOneUsuariosController {
    constructor(private readonly service: FindUsuariosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const usuario = await this.service.execute(Number(id))
        return response.json(usuario)
    }
}