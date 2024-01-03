import { UsuariosDTO } from "../dtos/usuario.dto";
import { UpdateUsuariosService } from "../services/update-usuario.service";
import { Request, Response } from "express";

export class UpdateUsuarioController {
    constructor(private readonly service: UpdateUsuariosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <UsuariosDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Usuários foram atualizados"})
    }
}