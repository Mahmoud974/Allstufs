import express from "express";
import authentication from "./authentication";
import ourproducts from "./ourproducts";
const router = express.Router();

export default(): express.Router => {
    authentication(router)
    ourproducts(router)
    return router

}