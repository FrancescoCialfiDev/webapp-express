import express from "express"
const booksRouter = express.Router() // Creiamo un instanza con il metodo router di express
import { index, show, destroy } from "../controllers/booksControllers.js"

// READ - (INDEX) 
booksRouter.get("/", index)

// READ - (SHOW)
booksRouter.get("/:id", show)

// CREATE - (STORE)
//movieRouter.post("/", store)

// UPDATE - (UPDATE)
//movieRouter.put("/:id", update)

// PATCH - (MODIFY)
//movieRouter.patch("/:id", modify)

// DELETE - (DESTROY)
booksRouter.delete("/:id", destroy)

export default booksRouter
