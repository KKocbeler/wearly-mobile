import { ProductType } from "../types/products"

export const createCartItem = (product: ProductType, color: string, size: string) => {
    return {
        cartItemId: `${product.id}_${color}_${size}`,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        variant: {
            color,
            size
        }
    }
}