import { IProduct } from "@/types/Product.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct extends IProduct {
    quantity: number;
}

export type AddProductType = IProduct & { quantity?: number };

export interface Cart {
    products: CartProduct[];
    addProduct: (product: AddProductType) => void;
    removeProduct: (id: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

export const useCart = create<Cart>()(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (product: AddProductType) => {
                const { products } = get();
                set({ products: addToCart(products, product) });
            },
            removeProduct: (id: number) => {
                const { products } = get();
                set({ products: removeFromCart(products, id) });
            },
            updateQuantity: (id: number, quantity: number) => {
                const { products } = get();
                set({ products: updateQuantityInCart(products, id, quantity) });
            },
        }),
        { name: "cart" },
    ),
);

const addToCart = (
    cart: CartProduct[],
    product: AddProductType,
): CartProduct[] => {
    const productsIdx = cart.findIndex((item) => item.id === product.id);
    if (productsIdx < 0) {
        return [...cart, { ...product, quantity: product.quantity ?? 1 }];
    } else {
        return cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
        );
    }
};

const removeFromCart = (cart: CartProduct[], id: number): CartProduct[] =>
    cart.filter((item) => item.id !== id);

const updateQuantityInCart = (
    cart: CartProduct[],
    id: number,
    quantity: number,
): CartProduct[] => {
    return quantity > 0
        ? cart.map((item) => (item.id === id ? { ...item, quantity } : item))
        : cart.filter((item) => item.id !== id);
};
