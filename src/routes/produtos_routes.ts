import { 
    createController,
    findController,
    removeController,
    updateController
} from "../modules/produtos"


import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/produtos", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/produtos", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/produtos/:id", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.delete("/produtos/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/produtos/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes