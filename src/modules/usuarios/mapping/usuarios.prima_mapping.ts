import { UsuariosEntity } from "../entities/usuario.entity";
import { Usuarios } from "@prisma/client";

export class UsuariosPrismaMapping {
    static to(Usuarios: Usuarios): UsuariosEntity {
        return {
            id: Usuarios.id,
            usuario: Usuarios.usuario,
            email: Usuarios.email,
            telefone: Usuarios.telefone
        }
    }

    static from(Usuarios: UsuariosEntity): Usuarios {
        return {
            id: Usuarios.id,
            usuario: Usuarios.usuario,
            email: Usuarios.email,
            telefone: Usuarios.telefone
        }
    }
}