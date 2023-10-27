import Product from "../models/product";

export interface ProductDTO {
  id?: string;
  data: Product;
}

export type ProductList = Array<ProductDTO>;
