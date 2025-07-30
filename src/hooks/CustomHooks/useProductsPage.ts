import { useState } from "react";
import { toast } from "sonner";
import {
  useGetAllProducts,
  useProductDelete,
} from "@/hooks/ReactQueryHooks/useProducts";
import { IProduct } from "@/app/api/Products";

export function useProductsPage() {
  const { data: products, isLoading: loading } = useGetAllProducts();
  const { mutate: deleteProduct, isPending: isDeleting } = useProductDelete();

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);

  // Filter products based on search term
  const filteredProducts =
    products?.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: IProduct) => {
    setSelectedProduct(product);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product: IProduct) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteProduct = () => {
    if (!productToDelete) return;

    deleteProduct(productToDelete.id, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        setProductToDelete(null);
        toast.success(`Product "${productToDelete.name}" deleted successfully`);
      },
      onError: (error) => {
        toast.error(
          `Failed to delete product: ${error.message || "Unknown error"}`
        );
      },
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  return {
    // Data
    products,
    filteredProducts,
    loading,
    isDeleting,

    // State
    searchTerm,
    isModalOpen,
    selectedProduct,
    modalMode,
    isDeleteModalOpen,
    productToDelete,

    // Actions
    setSearchTerm,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    confirmDeleteProduct,
    closeModal,
    closeDeleteModal,
  };
}
