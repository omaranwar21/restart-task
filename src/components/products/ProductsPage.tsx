"use client";

import { ProductModal } from "@/components/products/ProductModal";
import { DeleteConfirmationModal } from "@/components/products/DeleteConfirmationModal";
import { useProductsPage } from "@/hooks/CustomHooks/useProductsPage";
import Header from "./Header";
import Searchbar from "../common/Searchbar";
import ProductsNotFound from "./ProductsNotFound";
import ProductCard from "./ProductCard";
import { ProductsPageSkeleton } from "@/components/skeletons/ProductSkeleton";

export default function ProductsPage() {
  const {
    filteredProducts,
    loading,
    isDeleting,
    searchTerm,
    isModalOpen,
    selectedProduct,
    modalMode,
    isDeleteModalOpen,
    productToDelete,
    setSearchTerm,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    confirmDeleteProduct,
    closeModal,
    closeDeleteModal,
  } = useProductsPage();

  if (loading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Header handleAddProduct={handleAddProduct} />

      {/* Search Bar */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Products List */}
      {filteredProducts.length === 0 ? (
        <ProductsNotFound
          searchTerm={searchTerm}
          handleAddProduct={handleAddProduct}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleEditProduct={() => handleEditProduct(product)}
              handleDeleteProduct={() => handleDeleteProduct(product)}
            />
          ))}
        </div>
      )}

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        mode={modalMode}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteProduct}
        title="Delete Product"
        itemName={productToDelete?.name}
        isLoading={isDeleting}
      />
    </div>
  );
}
