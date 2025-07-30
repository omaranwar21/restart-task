import {
  deleteProduct,
  getAllProducts,
  getProductById,
  IProduct,
  productCreate,
  ProductCreatePayload,
  productUpdate,
  ProductUpdatePayload,
} from "@/app/api/Products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

//* Create A Product
export function useProductCreate() {
  const queryClient = useQueryClient();
  return useMutation<IProduct, AxiosError<string>, ProductCreatePayload>({
    mutationFn: (payload: ProductCreatePayload) => productCreate(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
//* Get All Products
export function useGetAllProducts() {
  return useQuery<IProduct[], AxiosError<string>>({
    queryFn: () => getAllProducts(),
    queryKey: ["products"],
  });
}

//* Get single Product by id
export function useGetProductById(product_id: string, enable: boolean = true) {
  return useQuery<IProduct, AxiosError<string>>({
    queryFn: () => getProductById(product_id),
    queryKey: ["products", { product_id }],
    enabled: enable && Boolean(product_id),
  });
}

//* Update Product
export function useProductUpdate(product_id: string) {
  const queryClient = useQueryClient();
  return useMutation<IProduct, AxiosError<string>, ProductUpdatePayload>({
    mutationFn: (payload: ProductUpdatePayload) => productUpdate(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", { product_id }] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

//* Delete Product
export function useProductDelete() {
  const queryClient = useQueryClient();
  return useMutation<IProduct, AxiosError<string>, string>({
    mutationFn: (product_id: string) => deleteProduct(product_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
