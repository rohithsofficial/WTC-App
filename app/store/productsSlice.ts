import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    updateProductStock: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.stock -= action.payload.quantity;
      }
    },
  },
});

export const {
  setProducts,
  setLoading,
  setError,
  setSelectedCategory,
  updateProductStock,
} = productsSlice.actions;

export default productsSlice.reducer;
