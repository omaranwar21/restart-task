import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IProduct } from "@/app/api/Products";
import Image from "next/image";
import { getValidImageUrlWithCategory } from "@/lib/image-utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";
import CustomTooltipProvider from "../common/CustomTooltipProvider";

export default function ProductCard({
  product,
  handleEditProduct,
  handleDeleteProduct,
}: {
  product: IProduct;
  handleEditProduct: () => void;
  handleDeleteProduct: () => void;
}) {
  return (
    <Card key={product.id} className="overflow-hidden">
      <div className="aspect-video relative bg-gray-100">
        <Image
          src={getValidImageUrlWithCategory(
            product.image,
            product.category,
            600,
            400
          )}
          alt={product.name}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to a simple placeholder if the validated URL also fails
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/600/400?random=${Math.floor(
              Math.random() * 1000
            )}`;
          }}
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <div className="flex space-x-2">
            <CustomTooltipProvider
              trigger={
                <Button variant="ghost" size="icon" onClick={handleEditProduct}>
                  <Edit className="h-4 w-4" />
                </Button>
              }
              content="Edit Product"
            />

            <CustomTooltipProvider
              trigger={
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDeleteProduct}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              }
              content="Delete Product"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
