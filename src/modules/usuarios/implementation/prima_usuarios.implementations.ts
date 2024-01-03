import { PrismasClient } from "@prisma/client";
import { UsuariosEntity } from "../../entities/usuario.entity";
import { UsuariosPrismaMapping } from "../../mappings/usuario.prisma.mapping";
import { UsuariosRepository } from "../usuario.repository";

export class PrismaUsuarioRepository implements UsuariosRepository {
    private prisma 
    constructor(){
        this.prisma = new PrismasClient()
    }

    async create(data: UsuariosEntity): Promise<void> {
        try {
            const usuario = UsuariosPrismaMapping.from(data)
            await this.prisma.usuario.create({ data: usuario })
        } catch (error) {
            console.log(error)
            throw new Error("Erro na criação dos usuários")
        }
    }

    async findById(id: number): Promise<UsuariosEntity> {
        try{
            const usuario = await this.prisma.usuario.findUniqueOrThrow({ where: { id }})
            return UsuariosPrismaMapping.to(usuario)
        } catch(error){
            console.log(error)
            throw new Error("Erro em encontrar usuários")
        }
    }

    async find(): Promise<UsuariosEntity[]> {
        try {
            const usuario = await this.prisma.usuario.findMany()
            return usuario.map(usuario => UsuariosPrismaMapping.to(usuario))
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os usuários")
        }
    }

    async update(id: number, data: UsuariosEntity): Promise<void> {
        try {
            const usuario = UsuariosPrismaMapping.from(data)
            await this.prisma.usuario.update({ where: {id}, data: usuario})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em atualizar usuários")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.Usuarios.delete({ where: { id } })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em deletar usuários")
        }
    }

}