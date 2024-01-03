import { PrismaClient } from '@prisma/client';
import { ProdutosEntity } from "../../entities/produto.entity";
import { ProdutosPrismaMapping } from "../../mappings/produto.prisma.mapping";
import { ProdutosRepository } from "../produto.repository";

export class PrismaProdutoRepository implements ProdutosRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(data: ProdutosEntity): Promise<void> {
        try {
            const produto = ProdutosPrismaMapping.from(data)
            await this.prisma.produto.create({ data: produto})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar o produto")
        }
    }

    async findById(id: number): Promise<ProdutosEntity> {
        try {
            const produto = await this.prisma.produto.findUniqueOrThrow({ where: { id }})
            return ProdutosPrismaMapping.to(produto)
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar o produto")
        }
    }

    async find(): Promise<ProdutosEntity[]> {
        try {
            const produto = await this.prisma.produto.findMany()
            return produto.map(produto => ProdutosPrismaMapping.to(produto))
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar produtos")
        }
    }

    async update(id: number, data: ProdutosEntity): Promise<void> {
        try {
            const produto = ProdutosPrismaMapping.from(data)
            await this.prisma.produto.update({ where: {id}, data: produto })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em atualizar produtos")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.produto.delete({ where: { id }})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em deletar produtos")
        }
    }

}