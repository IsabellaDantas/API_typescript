import { ProdutosEntity } from "../entities/produto.entity";
import { Produtos } from "@prisma/client";

export class ProdutoPrismaMapping {
    static to(produto: Produtos): ProdutosEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: produto.quantidade,
            imagem: produto.imagem
        }
    }

    static from(produto: ProdutosEntity): Produtos {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: produto.quantidade,
            imagem: produto.imagem
        }
    }
}