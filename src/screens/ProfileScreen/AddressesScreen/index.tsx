import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../../../components/AppSafeView';
import { FlatList } from 'react-native-gesture-handler';
import EmptyAddress from './EmptyAddress';
import AddressForm from './AddressForm';
import AddressCard from './AddressCard';
import AddNewAddress from './AddNewAddress';
import { useAddresses } from '../../../hooks/useAddresses';
import { AddressProps, newAddress } from '../../../types/addresses';

const AddressesScreen = () => {
    const { addresses, addAddress, editAddress } = useAddresses();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [visible, setVisible] = useState(false);


    const [newAddress, setNewAddress] = useState<newAddress>({
        userId: "user1",
        title: "",
        state: "",
        city: "",
        zipCode: "",
        fullAddress:"",
    })

    const handleTextChange = (key: any, value: any) => {
        setNewAddress((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = () => {
        if(editingId) {
            if(newAddress.city === "" || newAddress.state === "" || newAddress.zipCode === "" || newAddress.title === "") {
                return setError("This field cannot be empty")
            }

            editAddress(editingId, newAddress, isChecked)
            setEditingId(null);
            setVisible(false);
            setIsChecked(false);
            setError("");
            setNewAddress({
                userId: "user1",
                title: "",
                state: "",
                city: "",
                zipCode: "",
                fullAddress:"",
            })
            return;
        }

        const sameTitle = addresses.find(address => address.title.toLocaleLowerCase() === newAddress.title.toLocaleLowerCase())
        if(sameTitle) {
            return console.log("err", "You already have same adress title")
        }

        if(newAddress.city === "" || newAddress.state === "" || newAddress.zipCode === "" || newAddress.title === "") {
            return setError("This field cannot be empty")
        }

        addAddress(newAddress, isChecked)
        setNewAddress({
            userId: "user1",
            title: "",
            state: "",
            city: "",
            zipCode: "",
            fullAddress:"",
        })    
        setVisible(false);
        setIsChecked(false);
    }

    const handleAdressEdit = (address: AddressProps) => {
        setNewAddress({
            userId: "user1",
            title: address.title,
            state: address.state,
            city: address.city,
            zipCode: address.zipCode,
            fullAddress: address.fullAddress,
        })
        setEditingId(address.id)
        setIsChecked(address.isDefault)
        setVisible(true);
    }

    const handleModal = () => {
        setVisible(false)
        setNewAddress({
            userId: "user1",
            title: "",
            state: "",
            city: "",
            zipCode: "",
            fullAddress:"",
        }) 
    }

    return (
        <AppSafeView fullScreen top={false} bottom={false}>
            {
                addresses.length > 0 ? (
                    <>
                        <FlatList 
                            data={addresses}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <AddressCard 
                                    item={item}
                                    handleAdressEdit={handleAdressEdit}
                                />
                            )}
                            ListFooterComponent={
                                <AddNewAddress setVisible={setVisible}/>
                            }
                        />

                    </>
                ) : (
                    <EmptyAddress setVisible={setVisible} />
                )
            }
            <AddressForm 
                addresses={addresses}
                editingId={editingId}
                error={error}
                handleModal={handleModal}
                handleSubmit={handleSubmit}
                handleTextChange={handleTextChange}
                isChecked={isChecked}
                newAddress={newAddress}
                setIsChecked={setIsChecked}
                visible={visible}
            />
        </AppSafeView>
    )
}

export default AddressesScreen

const styles = StyleSheet.create({

})