import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../../components/AppText'
import { Feather } from '@expo/vector-icons'

interface AddNewAddressProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddNewAddress = ({setVisible}: AddNewAddressProps) => {
    return (
        <TouchableOpacity
            accessibilityRole='button'
            accessibilityLabel='Add new address'
            hitSlop={vs(8)}
            onPress={() => setVisible(true)}
            style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "center",
                gap: s(5),
                marginTop: vs(10)
            }}
        >
            <AppText variant='caption'>Add new address</AppText>
            <Feather name="plus-circle" size={s(14)} color="black" />
        </TouchableOpacity>
    )
}

export default AddNewAddress

const styles = StyleSheet.create({})