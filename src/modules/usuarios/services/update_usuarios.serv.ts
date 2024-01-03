import { UsuariosDTO } from "../dtos/usuario.dto";
import { UsuariosMapping } from "../mappings/usuario.mapping";
import { UsuariosRepository } from "../repositories/usuario.repository";

export class UpdateUsuariosService {
    constructor(private readonly usuarioRepository: UsuariosRepository) {}
    async execute(id: number, data: UsuariosDTO): Promise<void> {
        const usuario = UsuariosMapping.from(data)
        await this.usuarioRepository.update(id, usuario)
    }
}