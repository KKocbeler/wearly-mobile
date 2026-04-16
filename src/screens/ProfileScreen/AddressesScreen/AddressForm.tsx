import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/AppText'
import { Feather } from '@expo/vector-icons'
import AppTextInput from '../../../components/AppTextInput'
import { s, vs } from 'react-native-size-matters'
import Checkbox from 'expo-checkbox'
import AppButton from '../../../components/AppButton'
import { APP_COLORS } from '../../../themes/appColors'
import { AddressProps, newAddress } from '.'
import { APP_TYPOGRAPHY } from '../../../themes/appTypography'

interface AddressFormProps {
    visible: boolean;
    handleModal: () => void;
    handleTextChange: (key: any, value: any) => void;
    newAddress: newAddress;
    error: string
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    editingId: string | null;
    handleSubmit: () => void
    addresses: AddressProps[]
}

const AddressForm = ({
    visible, 
    handleModal, 
    handleTextChange, 
    newAddress, 
    error, 
    isChecked, 
    setIsChecked, 
    editingId, 
    handleSubmit, 
    addresses
}: AddressFormProps) => {
    return (
        <Modal
            visible={visible}
            animationType='none'
            onRequestClose={handleModal}
            transparent
        >
            <View style={styles.modalContainer}>
                <View style={styles.overlay}>
                    <TouchableOpacity
                        onPress={handleModal}
                        style={{alignItems: 'flex-end'}}
                    >
                        <AppText>
                            <Feather name="x" size={24} color="black" />
                        </AppText>
                    </TouchableOpacity>
                        <AppTextInput 
                            label='Address Title'
                            onChangeText={(text) => handleTextChange("title", text)}
                            value={newAddress.title}
                            error={newAddress.title ? "" : error}
                        />
                        <AppTextInput 
                            label='City'
                            onChangeText={(text) => handleTextChange("city", text)}
                            value={newAddress.city}
                            error={newAddress.city ? "" : error}
                        />
                        <AppTextInput 
                            label='State / Province' 
                            onChangeText={(text) => handleTextChange("state", text)}
                            value={newAddress.state}
                            error={newAddress.state ? "" : error}
                        />
                        <AppTextInput 
                            label='Zip Code'
                            onChangeText={(text) => handleTextChange("zipCode", text)}
                            value={newAddress.zipCode}
                            error={newAddress.zipCode ? "" : error}
                        />
                        <View style={{flexDirection: "row", alignItems: "center", gap: s(5), marginBottom: vs(12)}}>
                            <Checkbox 
                                value={isChecked}
                                onValueChange={setIsChecked}
                                style={{ width: s(14), height: s(14) }}
                                color={APP_COLORS.primary}
                                hitSlop={s(10)}
                                disabled={addresses.length === 1}
                            />
                            <AppText variant='caption'>Set as default address</AppText>
                        </View>
                        <AppButton 
                            title={editingId ? "Update Address" : "Add Address"}
                            variant='primary'
                            onPress={handleSubmit}
                        />
                </View>
            </View>
        </Modal>
    )
}

export default AddressForm

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    overlay: {
        justifyContent: 'flex-start',
        backgroundColor: APP_COLORS.appBackground,
        marginTop: "auto",
        padding: s(12),
        borderTopLeftRadius: APP_TYPOGRAPHY.sizes.sm,
        borderTopRightRadius: APP_TYPOGRAPHY.sizes.sm,
    },
})