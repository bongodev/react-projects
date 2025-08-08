import { Router } from "express";

import { CreateProductSchema } from "../schemas/product.js";
import validatePayload from "../middlewares/validatePayload.js";
import { productController } from "../controllers/index.js";

const productRouter = Router();

productRouter.post(
  "/",
  validatePayload(CreateProductSchema),
  productController.createProduct
);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:productId", productController.getProductById);
productRouter.put("/:productId", productController.updateProduct);
productRouter.delete("/:productId", productController.deleteProduct);

export default productRouter;
