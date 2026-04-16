import { OrderType } from "../types/orderstype";

export const ORDERS: OrderType[] = [
  {
    id: "o1",
    userId: "u1",
    items: [
      {
        productId: "1",
        title: "T-Shirt",
        price: 19,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 2,
        sum: 38,
        variant: {
          color: "Black",
          size: "M",
        },
      },
      {
        productId: "2",
        title: "Sneakers",
        price: 39,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 39,
        variant: {
          color: "White",
          size: "42",
        },
      },
      {
        productId: "4",
        title: "Hoodie",
        price: 39,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 39,
        variant: {
          color: "Gray",
          size: "L",
        },
      },
      {
        productId: "5",
        title: "Cap",
        price: 39,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 39,
        variant: {
          color: "Black",
          size: "Standard",
        },
      },
    ],
    totalPrice: 77,
    status: "completed",
    createdAt: "2026-04-01T12:30:00Z",
  },
  {
    id: "o2",
    userId: "u1",
    items: [
      {
        productId: "3",
        title: "Jacket",
        price: 59,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 59,
        variant: {
          color: "Brown",
          size: "M",
        },
      },
      {
        productId: "4",
        title: "Hoodie",
        price: 79,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 79,
        variant: {
          color: "Black",
          size: "L",
        },
      },
    ],
    totalPrice: 138,
    status: "pending",
    createdAt: "2026-04-03T15:45:00Z",
  },
  {
    id: "o3",
    userId: "u1",
    items: [
      {
        productId: "5",
        title: "Cap",
        price: 70,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 1,
        sum: 70,
        variant: {
          color: "Red",
          size: "Standard",
        },
      },
    ],
    totalPrice: 70,
    status: "completed",
    createdAt: "2026-04-05T10:20:00Z",
  },
  {
    id: "o4",
    userId: "u1",
    items: [
      {
        productId: "6",
        title: "Jeans",
        price: 39,
        image: require("../../assets/img/wood-clock.jpg"),
        quantity: 3,
        sum: 117,
        variant: {
          color: "Blue",
          size: "32",
        },
      },
    ],
    totalPrice: 117,
    status: "cancelled",
    createdAt: "2026-04-07T18:10:00Z",
  },
];