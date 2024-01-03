import { Router } from "express";
import UsuariosRoutes from "./usuario.routes"
import ProdutosRoutes from "./produto.routes"

const routes = Router()

routes.use(UsuariosRoutes)
routes.use(ProdutosRoutes)

export default routes