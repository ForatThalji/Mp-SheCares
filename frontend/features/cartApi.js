// src/features/cart/cartAPI.js

export const fetchProducts = async () => {
    const response = await fetch('/api/cart'); // Replace with actual API
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };
  