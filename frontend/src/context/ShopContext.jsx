import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const CART_KEY = "habipinas_cart";
const ORDERS_KEY = "habipinas_orders";
const USER_KEY = "habipinas_user";

const load = (key, fallback) => {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
};

const ShopContextProvider = (props) => {
    const currency = "₱";
    const delivery_fee = 120;
    const navigate = useNavigate();

    // cartItems shape: { [productId]: { [size]: quantity } }
    const [cartItems, setCartItems] = useState(() => load(CART_KEY, {}));
    const [orders, setOrders] = useState(() => load(ORDERS_KEY, []));
    const [user, setUser] = useState(() => load(USER_KEY, null));
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // Persist to localStorage
    useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cartItems)), [cartItems]);
    useEffect(() => localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)), [orders]);
    useEffect(() => {
        if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
        else localStorage.removeItem(USER_KEY);
    }, [user]);

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Please select a size first.");
            return;
        }
        setCartItems((prev) => {
            const next = structuredClone(prev);
            next[itemId] = next[itemId] || {};
            next[itemId][size] = (next[itemId][size] || 0) + 1;
            return next;
        });
        toast.success("Added to cart");
    };

    const updateQuantity = (itemId, size, quantity) => {
        setCartItems((prev) => {
            const next = structuredClone(prev);
            if (!next[itemId]) return prev;
            if (quantity <= 0) {
                delete next[itemId][size];
                if (Object.keys(next[itemId]).length === 0) delete next[itemId];
            } else {
                next[itemId][size] = quantity;
            }
            return next;
        });
    };

    const getCartCount = () => {
        let total = 0;
        for (const id in cartItems)
            for (const size in cartItems[id]) total += cartItems[id][size];
        return total;
    };

    const getCartAmount = () => {
        let total = 0;
        for (const id in cartItems) {
            const product = products.find((p) => p._id === id);
            if (!product) continue;
            for (const size in cartItems[id]) total += product.price * cartItems[id][size];
        }
        return total;
    };

    // Flattened list of cart lines for rendering
    const getCartLines = () => {
        const lines = [];
        for (const id in cartItems) {
            const product = products.find((p) => p._id === id);
            if (!product) continue;
            for (const size in cartItems[id]) {
                if (cartItems[id][size] > 0)
                    lines.push({ product, size, quantity: cartItems[id][size] });
            }
        }
        return lines;
    };

    const placeOrder = ({ address, paymentMethod }) => {
        const lines = getCartLines();
        if (lines.length === 0) {
            toast.error("Your cart is empty.");
            return null;
        }
        const itemsTotal = getCartAmount();
        const order = {
            id: "HP" + orders.length.toString().padStart(4, "0") + "-" + lines.length + itemsTotal,
            date: new Date().toLocaleString("en-PH", { dateStyle: "medium", timeStyle: "short" }),
            status: paymentMethod === "COD" ? "Order Placed" : "Awaiting Payment",
            paymentMethod,
            paid: paymentMethod !== "COD" ? false : false,
            address,
            items: lines.map((l) => ({
                id: l.product._id,
                name: l.product.name,
                image: l.product.image[0],
                price: l.product.price,
                size: l.size,
                quantity: l.quantity,
            })),
            itemsTotal,
            deliveryFee: delivery_fee,
            total: itemsTotal + delivery_fee,
        };
        setOrders((prev) => [order, ...prev]);
        setCartItems({});
        return order;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        updateQuantity,
        getCartCount,
        getCartAmount,
        getCartLines,
        orders,
        placeOrder,
        user,
        setUser,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
