import axios from "./api/index";
import { product } from "@/entities/product";
const baseUrl = process.env.API_BASE_URL;

export default class productService {
  async GetProduct(): Promise<product> {
    const res = await axios.get(`http://localhost:3001/product-data`, {
      headers: {
        "Content-Type": "application/json",
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    });
    return res.data;
  }
}
