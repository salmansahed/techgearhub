export interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

export interface Category {
  id: string;
  name: string;
  isDeleted: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  category?: Category;
  isDeleted: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  user?: User;
  productId: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
