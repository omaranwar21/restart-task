"use client";

import ProductsPage from "@/components/products/ProductsPage";
import { withAuth } from "@/hocs/auth-context";
import React from "react";

function page() {
  return <ProductsPage />;
}

export default withAuth(page);
