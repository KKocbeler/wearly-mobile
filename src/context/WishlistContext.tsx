import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getStorage, setStorage } from "../storage/asyncStorage";

interface WishlistContextType {
    wishlistIds: string[];
    toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlistIds: [],
  toggleWishlist: () => {},  
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlistIds, setWishlistIds] = useState<string[]>([]);

    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const data = (await getStorage("wishlist")) || [];
                setWishlistIds(data);
            } catch (error) {
                console.log(error);
            }
        };
        loadWishlist();
    }, []);

    const toggleWishlist = async (id: string) => {
        const updateIds = wishlistIds.includes(id) 
            ? wishlistIds.filter(i => i !== id) 
            : [...wishlistIds, id];

        setWishlistIds(updateIds);
        await setStorage("wishlist", updateIds);
    };

    return (
        <WishlistContext.Provider value={{ wishlistIds, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);