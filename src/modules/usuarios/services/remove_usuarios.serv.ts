import { UsuariosRepository } from "../repositories/usuario.repository";

export class RemoveUsuariosService {
    constructor(private readonly usuarioRepository: UsuariosRepository) { }
    async execute(id: number): Promise<void> {
        await this.usuarioRepository.delete(id)
    }
}