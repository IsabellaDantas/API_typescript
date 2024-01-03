import { UsuariosDTO } from "../dtos/usuario.dto";
import { UsuariosRepository } from "../repositories/usuario.repository";
import { UsuariosMapping } from "../mappings/usuario.mapping";

export class CreateUsuariosService {
    constructor(
        private readonly usuarioRepository: UsuariosRepository
    ) {}
    async execute(data: UsuariosDTO): Promise<void> {
        const usuario = UsuariosMapping.from(data)
        const resposta = await this.usuarioRepository.create(usuario)
    }
}