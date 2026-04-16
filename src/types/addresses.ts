export interface AddressProps {
    id: string;
    userId: string;
    title: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
    isDefault: boolean;
    createdAt: string;
}

export interface newAddress {
    userId: string;
    title: string;
    state: string;
    city: string;
    zipCode: string;
    fullAddress: string;
}