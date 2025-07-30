"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { IProduct, ProductCreatePayload } from "@/app/api/Products";
import {
  useProductCreate,
  useProductUpdate,
} from "@/hooks/ReactQueryHooks/useProducts";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: IProduct | null;
  mode: "add" | "edit";
}

export function ProductModal({
  isOpen,
  onClose,
  product,
  mode,
}: ProductModalProps) {
  const { mutate: createProduct, isPending: isCreating } = useProductCreate();

  const { mutate: updateProduct, isPending: isUpdating } = useProductUpdate(
    product?.id || ""
  );

  const [formData, setFormData] = useState<ProductCreatePayload>({
    name: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    if (mode === "edit" && product) {
      setFormData({
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        price: product.price,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        image: "",
        category: "",
        price: "",
      });
    }
  }, [mode, product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "edit" && product) {
      updateProduct(
        { ...formData, id: product.id },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
      return;
    } else if (mode === "add") {
      createProduct(formData, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Product" : "Edit Product"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isCreating || isUpdating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isCreating || isUpdating}>
              {mode === "add"
                ? isCreating
                  ? "Adding..."
                  : "Add Product"
                : isUpdating
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
