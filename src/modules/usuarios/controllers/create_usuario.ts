import { UsuariosDTO } from "../dtos/usuario.dto";
import { CreateUsuariosService } from "../services/create-usuario.services";
import { Request, Response } from "express"

export class CreateUsuariosController {
    constructor(private readonly service: CreateUsuariosService) {} 
    async handle(request: Request, response: Response): Promise<Response> {
        const usuario = <UsuariosDTO>request.body
        await this.service.execute(usuario)
        return response.json({ message: "Usuários criados"})
    }
}