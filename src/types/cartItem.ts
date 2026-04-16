export interface CartItem {
    cartItemId: string
    productId: string;
    title: string;
    price: number;
    image: any;
    quantity: number;
    sum: number;
    variant: {
        color: string;
        size: string;
    }
}

export interface CartState {
    items: CartItem[]
}