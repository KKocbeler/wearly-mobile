export interface ProductType {
  id: string;
  title: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  category: string;
  image: any;
  sizes: string[];
  colors: {
    name: string;
    code: string;
  }[];
  rating: {
    rate: number;
    count: number;
  };
  isNew?: boolean;
  isFeatured?: boolean;
  brand?: string;
}