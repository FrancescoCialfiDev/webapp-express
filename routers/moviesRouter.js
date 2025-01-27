import express from "express"
const moviesRouter = express.Router() // Creiamo un instanza con il metodo router di express
import { index, show, destroy } from "../controllers/moviesControllers.js"

// READ - (INDEX) 
moviesRouter.get("/", index)

// READ - (SHOW)
moviesRouter.get("/:id", show)

// CREATE - (STORE)
//movieRouter.post("/", store)

// UPDATE - (UPDATE)
//movieRouter.put("/:id", update)

// PATCH - (MODIFY)
//movieRouter.patch("/:id", modify)

// DELETE - (DESTROY)
moviesRouter.delete("/:id", destroy)

export default moviesRouter
