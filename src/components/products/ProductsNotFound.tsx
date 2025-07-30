import React from "react";
import { Card, CardContent } from "../ui/card";
import { Package, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductsNotFound({
  searchTerm,
  handleAddProduct,
}: {
  searchTerm: string;
  handleAddProduct: () => void;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Package className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600 text-center mb-4">
          {searchTerm
            ? "Try adjusting your search terms"
            : "Get started by adding your first product"}
        </p>
        {!searchTerm && (
          <Button onClick={handleAddProduct}>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
