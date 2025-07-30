import axiosInstance from "@/axios/axios";

export interface IProduct {
  createdAt: string;
  name: string;
  image: string;
  description: string;
  price: string | number;
  category: string;
  id: string;
}
export interface ProductCreatePayload {
  name: string;
  image: string;
  description: string;
  price: string | number;
  category: string;
}

export interface ProductUpdatePayload extends ProductCreatePayload {
  id: string;
}

//* Create a product
export async function productCreate(payload: ProductCreatePayload) {
  const response = await axiosInstance.post(
    "/product",
    { ...payload },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

//* Get all products
export async function getAllProducts() {
  const response = await axiosInstance.get("/product", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

//* Get product by id
export async function getProductById(product_id: string) {
  const response = await axiosInstance.get(`/product/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

//* Product update
export async function productUpdate(payload: ProductUpdatePayload) {
  const { id, ...payloadBody } = payload;
  const response = await axiosInstance.patch(
    `/product/${id}`,
    { ...payloadBody },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

//* Delete a product
export async function deleteProduct(product_id: string) {
  const response = await axiosInstance.delete(`/product/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
