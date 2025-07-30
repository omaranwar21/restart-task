"use client";

import ProductsPage from "@/components/products/ProductsPage";
import { withAuth } from "@/hocs/AuthProvider";
import React from "react";

function page() {
  return <ProductsPage />;
}

export default withAuth(page);
