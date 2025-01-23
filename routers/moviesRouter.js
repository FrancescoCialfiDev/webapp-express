import express from "express"
const movieRouter = express.Router() // Creiamo un instanza con il metodo router di express
import { index, show, destroy } from "../controllers/moviesControllers.js"

// READ - (INDEX) 
movieRouter.get("/", index)

// READ - (SHOW)
movieRouter.get("/:id", show)

// CREATE - (STORE)
//movieRouter.post("/", store)

// UPDATE - (UPDATE)
//movieRouter.put("/:id", update)

// PATCH - (MODIFY)
//movieRouter.patch("/:id", modify)

// DELETE - (DESTROY)
movieRouter.delete("/:id", destroy)

export default movieRouter
