import { ProductType } from "../types/products";

export const PRODUCTS: ProductType[] = [
  {
    id: "1",
    title: "Basic White T-Shirt",
    price: 19,
    discountPercent: 20,
    category: "t-shirt",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["S","M","L","XL","XXL"],
    colors: [
      { name: "Black", code: "#1C1C1C" },
      { name: "Green", code: "#2E4D2F" },
      { name: "Gray", code: "#A0A0A0" },
    ],
    rating: { rate: 4.5, count: 128 },
    isFeatured: true,
    brand: "Nike"
  },
  {
    id: "2",
    title: "Oversize Black Hoodie",
    price: 49,
    discountPrice: 39,
    category: "hoodie",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["S","M","L","XL","XXL"],
    colors: [
      { name: "Black", code: "#1C1C1C" },
      { name: "Gray", code: "#A0A0A0" },
    ],
    rating: { rate: 4.7, count: 256 },
    isNew: true,
    brand: "Adidas"
  },
  {
    id: "3",
    title: "Slim Fit Jeans",
    price: 59,
    category: "pants",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Blue", code: "#1E3A5F" },
      { name: "Black", code: "#1C1C1C" },
    ],
    rating: { rate: 4.3, count: 98 },
    brand: "Levis"
  },
  {
    id: "4",
    title: "Casual Sneakers",
    price: 79,
    discountPercent: 15,
    category: "shoes",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["40","41","42","43","44"],
    colors: [
      { name: "White", code: "#FFFFFF" },
      { name: "Black", code: "#1C1C1C" },
    ],
    rating: { rate: 4.8, count: 312 },
    isFeatured: true,
    brand: "Puma"
  },
  {
    id: "5",
    title: "Denim Jacket",
    price: 89,
    discountPrice: 70,
    category: "jacket",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["M","L","XL"],
    colors: [
      { name: "Blue", code: "#2C3E50" },
    ],
    rating: { rate: 4.6, count: 140 },
    brand: "Zara"
  },
  {
    id: "6",
    title: "Classic Shirt",
    price: 39,
    category: "shirt",
    image: require("../../assets/img/product-image.jpg"),
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "White", code: "#FFFFFF" },
      { name: "Beige", code: "#D2B48C" },
    ],
    rating: { rate: 4.2, count: 75 },
    isNew: true,
    brand: "H&M"
  },
];