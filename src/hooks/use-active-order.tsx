import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderProduct = { quantity: number; productId: number };

export interface ActiveOrder {
    deliveryAddress: string;
    isSelfDelivery: boolean;
    products: OrderProduct[];
    addProduct: (product: OrderProduct) => void;
    removeProduct: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
}

export const useOrder = create<ActiveOrder>()(
    persist(
        (set, get) => ({
            products: [],
            deliveryAddress: "",
            isSelfDelivery: true,
            addProduct: (product: OrderProduct) => {
                const { products } = get();
                set({ products: addToOrder(products, product) });
            },
            removeProduct: (id: number) => {
                const { products } = get();
                set({ products: removeFromOrder(products, id) });
            },
            updateQuantity: (id: number, quantity: number) => {
                const { products } = get();
                set({
                    products: updateQuantityInOrder(products, id, quantity),
                });
            },
            toggleSelfDelivery: (value: boolean) =>
                set({ isSelfDelivery: value }),
            updateDeliveryAddress: (address: string) =>
                set({ deliveryAddress: address }),
        }),
        { name: "order" },
    ),
);

const addToOrder = (
    products: OrderProduct[],
    product: OrderProduct,
): OrderProduct[] => {
    const productIdx = products.findIndex(
        (item) => item.productId === product.productId,
    );
    if (productIdx < 0) {
        return [...products, { ...product, quantity: product.quantity ?? 1 }];
    } else {
        return products.map((item) =>
            item.productId === product.productId
                ? { ...item, quantity: item.quantity + 1 }
                : item,
        );
    }
};

const removeFromOrder = (order: OrderProduct[], id: number): OrderProduct[] =>
    order.filter((item) => item.productId !== id);

const updateQuantityInOrder = (
    order: OrderProduct[],
    id: number,
    quantity: number,
): OrderProduct[] => {
    return quantity > 0
        ? order.map((item) =>
              item.productId === id ? { ...item, quantity } : item,
          )
        : order.filter((item) => item.productId !== id);
};
