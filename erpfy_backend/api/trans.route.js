import express from "express"
import transController from "./trans.controller.js"

const router = express.Router();

router.route("/").get((req, res) => res.send("hello world"))

router.route("/entry/:id").get(transController.apiGetEntry)
router.route("/new").post(transController.apiPostEntry)
router.route("/:id")
    .get(transController.apiGetEntry)
    .put(transController.apiUpdateEntry)
    .delete(transController.apiDeleteEntry)

export default router