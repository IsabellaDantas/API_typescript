import { UsuariosEntity } from "../entities/usuario.entity";
import { UsuariosRepository } from "../repositories/usuario.repository";

export class FindUsuariowService { 
    constructor(private readonly usuarioRepository: UsuariosRepository) {}
    async execute(id: number): Promise<UsuariosEntity> {
        const usuario = await this.usuarioRepository.findById(id)
        return usuario
    }
}