import { UsuariosDTO } from "../dtos/usuario.dto";
import { UsuariosEntity } from "../entities/usuario.entity";

export class UsuariosMapping {
    static from(usuarios: UsuariosDTO): UsuariosEntity {
        return {
            id: usuarios.id,
            usuario: usuarios.usuario,
            email: usuarios.email,
            telefone: usuarios.telefone,
        }
    }
}