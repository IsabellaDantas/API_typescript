import { PrismaUsuariosRepository } from "./repositories/implementations/prisma-usuario.repository";
import { CreateUsuariosService } from "./services/create-usuario.services";
import { CreateUsuariosController } from "./controllers/create-usuario.controller";
import { FindUsuariosController } from "./controllers/find-one-usuario.controller";
import { FindUsuariosService } from "./services/find-one-usuario.service";
import { RemoveUsuariosController } from "./controllers/remove-usuario.controller";
import { RemoveUsuariosService } from "./services/remove-usuario.service";
import { UpdateUsuariosController } from "./controllers/update-usuario.controller";
import { UpdateUsuariosService } from "./services/update-usuario.service";

const repository = new PrismaUsuariosRepository()

const createService = new CreateUsuariosService(repository)
const createController = new CreateUsuariosController(createService)

const findService = new FindUsuariosService(repository)
const findController = new FindUsuariosController(findService)

const findService = new FindUsuariosService(repository)
const findController = new FindUsuariosController(findService)

const removeService = new RemoveUsuariosService(repository)
const removeController = new RemoveUsuariosController(removeService)

const updateService = new UpdateUsuariosService(repository)
const updateController = new UpdateUsuariosController(updateService)

export {
    createController,
    findController,
    removeController,
    updateController
}