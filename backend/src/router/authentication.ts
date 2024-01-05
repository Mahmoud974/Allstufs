import express from "express";
import { register, login } from "../controllers/authentication";
const router = express.Router();

export default(router: express.Router )=> {
router.post('/login', login)
router.post('/register', register)

}