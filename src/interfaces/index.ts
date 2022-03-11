export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: ProductImage[];
}

// interface ProductInterface {
//   ir: number;
//   title: string;
//   description: string;
//   image: string;
//   status: "Available" | "OutOfStock";
//   // variants?: string[];
//   price: number;
//   tags?: string[];
// }
