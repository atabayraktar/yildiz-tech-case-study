import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { product } from "@/entities/product";
import ProductService from "@/services/productService";

type ProductState = {
  product: product;
};

const initialState: ProductState = {
  product: {
    productTitle: "",
    selectableAttributes: [
      {
        name: "",
        values: [""],
      },
      {
        name: "",
        values: [""],
      },
    ],
    productVariants: [
      {
        id: "",
        attributes: [
          {
            name: "",
            selectable: true,
            value: "",
          },
        ],
        images: [""],
      },
    ],
    baremList: [
      {
        minimumQuantity: 0,
        maximumQuantity: 0,
        price: 0,
      },
    ],
  },
};

export const productService = new ProductService();

export const getProduct = createAsyncThunk(
  "product/GetProduct",
  async () => await productService.GetProduct()
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => ({
      ...state,
      product: {
        productTitle: "",
        selectableAttributes: [
          {
            name: "",
            values: [""],
          },
          {
            name: "",
            values: [""],
          },
        ],
        productVariants: [
          {
            id: "",
            attributes: [
              {
                name: "",
                selectable: true,
                value: "",
              },
            ],
            images: [""],
          },
        ],
        baremList: [
          {
            minimumQuantity: 0,
            maximumQuantity: 0,
            price: 0,
          },
        ],
      },
    }));
    builder.addCase(getProduct.rejected, (state, action) => ({
      ...state,
      product: {
        productTitle: "",
        selectableAttributes: [
          {
            name: "",
            values: [""],
          },
          {
            name: "",
            values: [""],
          },
        ],
        productVariants: [
          {
            id: "",
            attributes: [
              {
                name: "",
                selectable: true,
                value: "",
              },
            ],
            images: [""],
          },
        ],
        baremList: [
          {
            minimumQuantity: 0,
            maximumQuantity: 0,
            price: 0,
          },
        ],
      },
    }));
    builder.addCase(getProduct.fulfilled, (state, action) => ({
      ...state,
      product: action.payload,
    }));
  },
});

export default productSlice.reducer;
