import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function Header({
  handleAddProduct,
}: {
  handleAddProduct: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-600 mt-2">Manage your product inventory</p>
      </div>
      <Button onClick={handleAddProduct} className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        Add Product
      </Button>
    </div>
  );
}
