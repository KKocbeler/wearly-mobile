import { useState } from "react";
import { AddressProps, newAddress } from "../types/addresses";

export const useAddresses = () => {
    const [addresses, setAddresses] = useState<AddressProps[]>([])

    const addAddress = (newAddress: newAddress, isDefault: boolean) => {
        setAddresses(prev => {
            const UpdatedAddresses = prev.map(address => ({
                ...address,
                isDefault: isDefault ? false : address.isDefault
            }))

            return [
                ...UpdatedAddresses,
                {
                    ...newAddress,
                    id: Date.now().toString(),
                    createdAt: new Date().toISOString(),
                    isDefault: isDefault 
                }
            ]
        });
    }

    const deleteAddress = (id: string) => {
        setAddresses(prev => {
            const filtered = prev.filter(address => address.id !== id);
            const deletedAddress = prev.find(address => address.id === id);
            
            if(deletedAddress?.isDefault && filtered.length > 0) {
                filtered[0].isDefault = true;
            }

            return filtered
        });
    }

    const setDefaultAddress = (id: string) => {
        setAddresses(prev => 
            prev.map(item =>
                item.id === id
                    ? {...item, isDefault: true}
                    : {...item, isDefault: false}
            )
        )
    };

    const editAddress = (id: string, updateData: any, isDefault: boolean) => {
        setAddresses(prev => 
            prev.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        ...updateData,
                        isDefault
                    };
                } else {
                    return isDefault
                        ? { ...item, isDefault: false}
                        : item;
                }
            })
        )
    };

    return {
        addresses,
        addAddress,
        deleteAddress,
        setDefaultAddress,
        editAddress,
    }
}