import express from "express";
import { addProduct, getAllProducts } from "../controllers/products";
import multer from "multer";
import slugify from "slugify";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    const cleanedFileName = slugify(file.originalname, { lower: true });
    cb(null, `${Date.now()}_${cleanedFileName}`);
  }
});
const upload = multer({storage})
const router = express.Router();

export default(router: express.Router )=> {

router.get('/getAllProducts', getAllProducts)
router.post('/createProduct', upload.single('file'), addProduct)

}