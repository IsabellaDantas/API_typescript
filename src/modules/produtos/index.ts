import { PrismaProdutoRepository } from "./repositories/implementations/prisma-produto.repository";
import { CreateProdutoController } from "./controllers/create-produto.controller";
import { CreateProdutoService } from "./services/create-produto.service";
import { FindProdutosController } from "./controllers/find-one-produto.controller";
import { FindProdutos } from "./services/find-one-produto.service";
import { FindProdutosService } from "./services/find-produto.service";
import { RemoveProdutoController } from "./controllers/remove-produto.controller";
import { RemoveProdutoService } from "./services/remove-produto.service";
import { UpdateProdutoController } from "./controllers/update-produto.controller";
import { UpdateProdutoService } from "./services/update-produto.service";

const repository = new PrismaProdutoRepository()

const createService = new CreateProdutoService(repository)
const createController = new CreateProdutoController(createService)

const findOneService = new FindProdutosService(repository)
const findController = new FindProdutosController(findOneService)

const removeService = new RemoveProdutoService(repository)
const removeController = new RemoveProdutoController(removeService)

const updateService = new UpdateProdutoService(repository)
const updateController = new UpdateProdutoController(updateService) 

export {
    createController,
    findController,
    removeController,
    updateController
}