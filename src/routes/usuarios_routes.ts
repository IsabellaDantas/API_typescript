import {
    createController,
    findController,
    removeController,
    updateController
} from "../modules/usuario"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/usuarios", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/usuarios", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/usuarios/:id", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.delete("/usuarios/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/usuarios/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes