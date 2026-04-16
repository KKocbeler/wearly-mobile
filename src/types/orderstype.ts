export interface OrderType {
  id: string;
  userId: string;
  items: OrderItemType[];
  totalPrice: number;
  status: OrderStatusType;
  createdAt: string;
}

export type OrderStatusType = "pending" | "completed" | "cancelled";

export interface OrderItemType {
  productId: string;
  title: string;
  price: number;
  image: any;
  quantity: number;
  sum: number;
  variant: {
    color: string;
    size: string;
  };
}